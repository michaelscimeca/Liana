export const state = () => ({
  hits: [],
  coords: [],
  active: false,
  blue: false,
  elem: null,
  closeIcon: false,
  forceDefault: false,
  activeNav: 0
});

export const mutations = {
  changeActiveNav (state, val) {
    state.activeNav = val;
  },
  activate (state, val) {
    state.active = true;
  },
  deactivate (state, val) {
    state.active = false;
  },
  showCloseIcon (state, val) {
    state.closeIcon = true;
  },
  removeCloseIcon (state, val) {
    state.closeIcon = false;
  },
  setForceDefault (state, val) {
    state.forceDefault = true;
  },
  disableForceDefault (state, val) {
    state.forceDefault = false;
  },
  setBlue (state, val) {
    state.blue = true;
  },
  disableBlue (state, val) {
    state.blue = false;
  },
  updateCoords (state, val) {
    state.coords = val;
  },
  setElem (state, val) {
    state.elem = val;
  },
  clearElem (state, val) {
    state.elem = null;
  },
  addHit (state, val) {
    state.hits.push(val);
  },
  updateHit (state, val) {
    const indx = state.hits.indexOf(val.index);
    state.hits[indx] = state.hits.val;
  }

};
