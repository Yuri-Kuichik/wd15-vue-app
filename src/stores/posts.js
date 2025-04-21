import { defineStore } from "pinia";
import axios from "axios";

const instanceAxios = axios.create({
  baseURL: 'https://studapi.teachmeskills.by'
});

export const usePostsStore = defineStore('posts', {
  state() {
    return {
      postData: null,
      postListData: null,
      searchString: '',
      postsLimit: 3,
      courseGroupId: 15
    }
  },

  actions: {
    async getPostList(url) {
      const pamarsStr = this.getPostListParams(url)
      const res = await instanceAxios.get(`/blog/posts${pamarsStr}`)
      this.postListData = res.data;
    },

    async getPost(id) {
      const res = await instanceAxios.get(`/blog/posts/${id}`);
      this.postData = res.data;
    },

    getPostListParams(url) {
      if (url) { 
        return `?${url?.split('?')[1]}`;
      }

      const paramsData = {
        search: this.searchString, 
        limit: this.postsLimit, 
        author__course_group: this.courseGroupId
      }
      let arrParams = Object.keys(paramsData) // ['search', 'limit', 'author__course_group']
      let str = ''
      let arr = arrParams.reduce((acc, param) => {
          return paramsData[param] ? [...acc, `${param}=${paramsData[param]}`] : acc
      }, [])
  
      if (arr.length) {
          str = '?' + arr.join('&')
      }

      return str
    },

  },

  getters: {

  }
})