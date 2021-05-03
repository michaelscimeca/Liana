export const state = () => ({
  message: {},
  index: '',
  color: ''
});

export const mutations = {
  setStickyContent (state, val) {
    state.message = val.message;
    state.index = val.index;
    state.color = val.color;
  }
};
