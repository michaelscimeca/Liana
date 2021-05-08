<template>
  <section :class="containerClasses">
    <div class="follow"></div>
    <HeroComponent />
    <AfricaComponent/>
    <div class="footer">
      <svg preserveAspectRatio="none" id="footer-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2278 683" overflow="visible">
        <defs>
        <style>.footer-svg{fill:var(--color-primary);}</style>
      </defs>
      <path class="footer-svg" id="bouncy-path" d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"/>
    </svg>
  </div>
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
    };
  },
  watch: {

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
