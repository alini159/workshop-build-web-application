import Tasks from '@/api/resources/tasks';

const state = {
  lists: null,
};
  
const getters = {
  lists: () => (state.lists),
};

const actions = {
  fetchLists({ commit  }) {
    Tasks.lists().then((response) => {
      commit('setLists', response);
    });
  },
};

const mutations = {
  setLists($state, payload) {
    const stateCopy = $state;
    stateCopy.lists = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

//ok