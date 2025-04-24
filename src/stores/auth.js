import { defineStore } from "pinia";
import cookie from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const instanceAxios = axios.create({
  baseURL: 'https://studapi.teachmeskills.by'
});

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      accessToken: '',
      refreshToken: '',
      tokenKey: 'postsApp__accesToken',
      refreshTokenKey: 'postsApp__refreshToken',
      loading: false,
      userData: null
    }
  }, 

  actions: {
    async signIn(data) {
      this.loading = true;
      try {
        const res = await instanceAxios.post('/auth/jwt/create/', data)

        this.accessToken = res.data?.access
        this.refreshToken = res.data?.refresh

        // можно получить данные пользователя
        this.getAuthUsersMe();

        this.setCookie();
        this.router.push('/')
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    async createUser(data) {
      this.loading = true;
      try {
        await instanceAxios.post('/auth/users/', data)
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    async activateUser(data) {
      this.loading = true;
      try {
        await instanceAxios.post('/auth/users/activation/', data);
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

     // с помощью этого запроса можно получить данные юзера, например его id
     async getAuthUsersMe() {
      try {
        const res = await instanceAxios.get('/auth/users/me/', { 
          headers: {'Authorization': `Bearer ${this.accessToken}`} 
        });
        
        this.userData = res.data
      } catch(error) {
        console.log(error.message)
      }
    },

    // с помощью этого запроса можно получить данные юзера, например его id
    async setNewEmail(password, newEmail) {
      if ( !this.isTokenExist() && this.isRefreshTokenExist() ) {
        await this.getNewToken();

        const data = {
          "current_password": password,
          "new_email": newEmail
        }
  
        try {
          instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
          await instanceAxios.post('/auth/users/set_email/', data);
        } catch(error) {
          console.log(error.message)
        }
      } else {
        this.router.push('/login')
      }
    },

    async getNewToken() {
      const token = cookie.get(this.refreshTokenKey)

      if(token) {
        const data = {refresh: token}

        try {
          const res = await instanceAxios.post('/auth/jwt/refresh/', data);
          this.accessToken = res.data.access;
          this.setCookie();
        } catch(error) {
          console.log(error.message)
        }
      }
    },

    setCookie() {
      const payload = jwtDecode(this.accessToken)

      let expTime = payload.exp * 1000
      console.log('Date expire: ', new Date(expTime))

      // let curTime = new Date().getTime();
      // let expTimeOneMinute = curTime + 30*1000
      // console.log('Date expire one minute: ', new Date(expTimeOneMinute))

      cookie.set(
        this.tokenKey, 
        this.accessToken,
        {expires: new Date(expTime)} 
      )
      cookie.set(this.refreshTokenKey, this.refreshToken)
    },

    removeCookie() {
      cookie.remove(this.tokenKey);
      cookie.remove(this.refreshTokenKey);
    },

    signOut() {
      this.accessToken = '';
      this.refreshToken = '';
      this.removeCookie();
    },

    isAuth() {
      return !!cookie.get(this.tokenKey);
      // return true
    },

    isTokenExist() {
      this.isAuth();
    },

    isRefreshTokenExist() {
      return !!cookie.get(this.refreshTokenKey);
    },
  }
})