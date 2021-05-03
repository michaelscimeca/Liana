<template>
  <section :class="containerClasses">
    <HeroComponent />
    <!-- <div id="location" ref="location">
    </div> -->
  </section>
</template>

<script>
import imagesLoaded from 'imagesloaded';

// mixins
import meta from '~/mixins/meta.js';
import introAnimation from '~/mixins/introAnimation.js';
// components
import HeroComponent from '~/components/HeroComponent.vue';


export default {
  transition: {
    name: "slide",
    mode: "out-in",
    css: false,
    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        // filter: 'blur(2004px)',
      });
    },
    enter(el, done) {
      this.$nuxt.$emit('pageChange');
      this.$nuxt.$emit('scrollTop');
      this.$gsap.to(el, {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        onComplete: done,

      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        filter: 'blur(200px)',
        duration: 1,
        ease: "power3.inOut",
        onComplete: done,
      });
    },
  },
  mixins: [
    meta,
    introAnimation
  ],
  components: {
    HeroComponent,
  },
  async asyncData ({$content, store}) {
    const campaigns = await $content('campaign')
    .sortBy('index')
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    });

    store.commit('stickyNote/setStickyContent', { color: campaigns[0].color, message: campaigns[0].message, index: campaigns[0].index });

    return {
      campaigns
    }
  },
  data () {
    return {
      y: 0,
      t: null,
      tween: null,

    };
  },
  watch: {
    position: function (oldVal, newVal) {
      this.$data.y = (oldVal - newVal);
      this.$data.ramp = this.$data.y * 63;
      this.$data.ramps = this.$data.y * 9;
      // .to(this.$refs.title, {
      //   z: `${-this.clamp(this.$data.ramps, -10, 10)}px`,
      //   ease: "power4.inOut",
      //   scrollTrigger: {
      //     trigger: this.$refs.hero,
      //     start: 'top center',
      //     scrub: true,
      //   }
      // })
      // .to(this.$refs.paragraph, {
      //   z: `${-this.clamp(this.$data.ramps, -10, 10)}px`,
      //
      //   ease: "power4.inOut",
      //   scrollTrigger: {
      //     trigger: this.$refs.hero,
      //     start: 'top center',
      //     scrub: true,
      //   }
      // })
      // this.animations(this.$data.y, this.$data.ramp, this.$data.ramps)
    },
  },
  computed: {
    position: function () {
      return this.$store.state.locomotive.scroll.y
    }
  },
  methods: {
    clamp: (num, min, max) => { return num <= min ? min : num >= max ? max : num; },

  },
  created: function () {},
  mounted: function () {

      this.$nextTick(() => {
        this.$nuxt.$emit('update-locomotive');
      });
      const preloadImages = () => {
        return new Promise((resolve, reject) => {
          imagesLoaded(document.querySelectorAll('.js-load'), { background: true }, resolve);
        });
      };
      preloadImages().then((e) => {
        this.$nuxt.$emit('pageChange');
        this.$nuxt.$emit('getHeight');
        // this.$nuxt.$emit('letGoHero');
      });
    },
    destroyed: function () {}
  };
  </script>

  <style src="./index.scss" lang="scss" scoped>



  </style>
