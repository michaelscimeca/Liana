export default {
  data () {
    return {
      containerClasses: {
        container: true,
        'intro-enter-active': false,
        'intro-enter': false
      }
    };
  },
  created: function () {
    this.$data.containerClasses['intro-enter'] = true;
  },
  methods: {
    animateIn: function (cb) {
      setTimeout(() => {
        this.$data.containerClasses['intro-enter-active'] = true;
      }, 100);

      this.introReset = setTimeout(() => {
        this.$data.containerClasses['intro-enter-active'] = false;
        this.$data.containerClasses['intro-enter'] = false;
        if (cb) {
          cb();
        }
      }, this.$data.introDuration + 100);
    }
  },
  destroyed: function () {
    clearTimeout(this.introReset);
  }
};
