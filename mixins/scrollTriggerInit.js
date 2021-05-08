export default {
  data: {
    y: 0,
    container: null,
  },
  watch: {
    yScrollVal: function (newVal, oldVal) {
      this.$data.y = newVal;
      this.$ScrollTrigger.update();
    }
  },
  computed: {
    yScrollVal: function () {
      return this.$store.state.locomotive.scroll.y;
    }
  },
  methods: {
    init: function () {
      this.container = document.querySelector('.js-locomotive .scroll');
      const _this = this;

      this.$ScrollTrigger.scrollerProxy(this.container, {
        scrollTop (value) {
          return arguments.length ? this.container.scrollTo(value, 0, 0) : _this.data.y;
        },
        getBoundingClientRect () {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        }
      });
    }
  },
  mounted: function () {
    // this.init();
  }
};
