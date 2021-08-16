const state = {
    user: null,
    hasSession: false,
    googleToken: '',
  };
  
  const getters = {
    currentUser: () => (state.user),
    hasSession: () => (state.hasSession),
    getToken: () => (state.googleToken),
  };
  
  const actions = { 
    addUser({ commit }, payload) {
      commit('setUser', payload)
      if (payload) {
        commit('setSession', true)
      }
    },
    addGoogleToken({ commit }, payload) {
      commit('setToken', payload)
    }
  }
  
    const mutations = {
        setUser($state, payload) {
        const stateCopy = $state;
        stateCopy.user = payload;
    },

        setSession($state, payload) {
        const stateCopy = $state;
        stateCopy.hasSession = payload;
      },
        setToken($state, payload) {
        const stateCopy = $state;
        stateCopy.googleToken = payload;
      }
 
    }
    export default {
        state,
        getters,
        actions,
        mutations,
};
//ok