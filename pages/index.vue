<template>
  <section :class="containerClasses">
    <div class="follow"></div>
    <HeroComponent />
    <AfricaComponent/>
  </section>
</template>

<script>
import imagesLoaded from 'imagesloaded';
// mixins
import meta from '~/mixins/meta.js';
import introAnimation from '~/mixins/introAnimation.js';

// components
import HeroComponent from '~/components/HeroComponent.vue';
import AfricaComponent from '~/components/AfricaComponent.vue';

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
    introAnimation,
  ],
  components: {
    HeroComponent,
    AfricaComponent
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
  },
  computed: {
  },
  methods: {
  },
  created: function () {},
  mounted: function () {
    this.$nextTick(() => {
      this.$nuxt.$emit('update-locomotive');
    });
    const preloadImages = (e) => {
      return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.js-load'), { background: true }, resolve);
      });
    };
    preloadImages().then((e) => {
      this.$nuxt.$emit('pageChange');
      this.$nuxt.$emit('getHeight');
    });
  },
  destroyed: function () {}
};
</script>

<style src="./index.scss" lang="scss" scoped>



</style>
