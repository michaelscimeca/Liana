export const state = () => ({
  touchevents: false,
  onClient: false,
  heroKey: 0
});

export const mutations = {
  setTouchEvents (state, val) {
    state.touchevents = val;
  },
  onTheClient (state, val) {
    state.onClient = true;
  },
  updateHeroKey (state, val) {
    state.heroKey++;
  }
};
