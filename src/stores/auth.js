import { defineStore } from "pinia";
import cookie from 'js-cookie'
import { jwtDecode } from "jwt-decode";

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      accessToken: '',
      refreshToken: '',
      tokenKey: 'postsApp__accesToken',
      refreshTokenKey: 'postsApp__refreshToken',
      loading: false
    }
  }, 

  actions: {
    async signIn(data) {
      try {
        const res = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
          method: 'POST',
          headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                  },
          body: JSON.stringify(data)
        })

        const json = await res.json()
        this.accessToken = json?.access
        this.refreshToken = json?.refresh

        this.setCookie();
        this.router.push('/')
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    async createUser(data) {
      try {
        await fetch('https://studapi.teachmeskills.by/auth/users/', {
          method: 'POST',
          headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                  },
          body: JSON.stringify(data)
        })
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    async activateUser(data) {
      try {
        await fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
      })
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    setCookie() {
      const payload = jwtDecode(this.accessToken)

      let expTime = payload.exp * 1000
      let curTime = new Date().getTime();
      console.log(expTime - curTime)
      console.log('Date expire: ', new Date(expTime))

      cookie.set(
        this.tokenKey, 
        this.accessToken,
        {expires: new Date(expTime)} 
      )
      cookie.set(this.refreshTokenKey, this.refreshToken)
    },

    isAuth() {
      return !!cookie.get(this.tokenKey);
    },

    removeCookie() {
      cookie.remove(this.tokenKey)
      cookie.remove(this.refreshTokenKey)
    }
  }
})