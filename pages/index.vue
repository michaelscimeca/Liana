<template>
  <section :class="containerClasses">
    <HeroComponent />
    <AfricaComponent/>
    <div id="form-section" ref="formSection">
      <div id="form-container" ref="formCont">
        <div id="form-ball" ref="formBall"></div>
        <div id="cloud-one" ref="cloudOne"></div>
        <div id="cloud-two" ref="cloudTwo"></div>
        <div id="form"  >
          <!-- <h2>Let’s See What Can We Accomplish.</h2> -->
        </div>
      </div>
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
    this.formTween = this.$gsap.timeline();

    this.formTween
    .set(this.$refs.formSection, {
      opacity: 0,
    })
    .set(this.$refs.formCont, {
      x: 100,
      y: -100,
      opacity: 0,
      scale: 0.9,
      rotate: '-2deg',
    })
    .set(this.$refs.formBall, {
      x: 0,
      y: -320,
    })
    .set(this.$refs.cloudOne, {
      x: 0,
      y: -120,
      opacity: 1,
      scale: 0.8,
      rotateY: '-12deg',
    })
    .set(this.$refs.cloudTwo, {
      x: 0,
      scale: 0.8,
      y: -120,
      rotateY: '12deg',
      delay: 3
    })
    .to('#hero', {
      filter: 'blur(60px)',
      scale: 0.9,
      ease:"expo.out",
      opacity: 0.8,
      x: 30,
      duration: 1.8,
    },'<')
    .to(this.$refs.formSection, {
      x: 0,
      y: 0,
      rotateY: '0deg',
      scale: 1,
      ease:"expo.out",
      opacity: 1,
      duration: 1.8,
      },'<')
    .to(this.$refs.formCont, {
      x: 0,
      y: 0,
      scale: 1,
      ease:"expo.out",
      opacity: 1,
      duration: 6,
      rotate: '0deg',
    },'<')
    .to(this.$refs.formBall, {
      x: 0,
      y: 0,
      rotateY: '0deg',
      scale: 1,
      opacity: 1,
      ease: "power4.inOut",
      duration: 1.8,
    },'<')
    .to(this.$refs.cloudOne, {
      x: 0,
      y: 0,
      rotateY: '0deg',
      scale: 1,
      ease: "power4.inOut",
      opacity: 1,
      duration: 1.8,
    },'<')
    .to(this.$refs.cloudTwo, {
      x: 0,
      y: 0,
      rotateY: '0deg',
      scale: 1,
      ease: "power4.inOut",
      opacity: 1,
      duration: 1.8,
    },'<')
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
