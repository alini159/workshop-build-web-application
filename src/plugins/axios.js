import axios from 'axios';
import Vue from 'vue';
import store from '../stores';

const baseConfig = {
  baseURL: `https://tasks.googleapis.com`,
}

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getters.getToken;
    const storageToken = JSON.parse(window.localStorage.getItem('ACCESS_TOKEN'));

    if (token || storageToken) {
      config.headers['Authorization'] = `Bearer ${token || storageToken}`;
    }
    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axiosInstance;
      }
    }
  });
};
Vue.use(Plugin)

export default Plugin;
//ok