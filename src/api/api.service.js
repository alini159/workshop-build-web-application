import Vue from 'vue';

const ApiService = {
  get(resourcePath) {
    return new Promise((resolve) => {
      Vue.axios
        .get(resourcePath).then((response) => {
          resolve(response.data);
        }).catch((error) => {
          console.log('Error', error.response);
        });
    });
  },

  post(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .post(`${resourcePath}`, params).then((response) => {
          resolve(response.data);
        }).catch((error) => {
          console.log('Error', error.response);
        });
    });
  },
};

export default ApiService;