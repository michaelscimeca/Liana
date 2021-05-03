export const state = () => ({
  navData: []
});

export const mutations = {
  getNavData: function (state, val) {
    state.navData = val;
  }
};

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getNav');
  },
  async getNav ({ commit }) {
    const results = await this.$content('campaign')
      .sortBy('index')
      .only(['slug', 'thumbnail', 'name', 'path', 'index', 'description'])
      .fetch();
    commit('getNavData', results);
  }
};
