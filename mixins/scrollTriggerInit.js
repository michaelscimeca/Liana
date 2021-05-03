import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default {
  watch: {
    yScrollVal: function (newVal, oldVal) {
      this.$data.y = newVal;
      ScrollTrigger.update();
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

      ScrollTrigger.scrollerProxy(this.container, {
        scrollTop (value) {
          return arguments.length ? this.container.scrollTo(value, 0, 0) : _this.y;
        },
        getBoundingClientRect () {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        }
      });
    }
  },
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    this.init();
  }
};
