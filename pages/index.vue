<template>
  <section :class="containerClasses">
    <div id="form-section" ref="formSection">
      <div id="form-container" ref="formCont">
        <div id="cloud-one" ref="cloudOne"></div>
        <div id="cloud-two" ref="cloudTwo"></div>
        <div id="form"  >
          <!-- <h2>Let’s See What Can We Accomplish.</h2> -->
        </div>
      </div>
    </div>
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
    };
  },
  watch: {

  },
  methods: {
  },
  created: function () {},
  mounted: function () {
    this.formTweenSet = this.$gsap.timeline();
    this.formTween = this.$gsap.timeline({ paused: true, id: 'intros', overwrite: "auto" });
    const press = document.querySelector("#btn");
    const form = document.querySelector("#form-container");
    const formBall = document.querySelector(".bulb-orbit");

    // console.log( press.getBoundingClientRect().top)
    press.addEventListener('click', () => {
      this.formTween.play();
    })
    // console.log()

    this.formTweenSet
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
    })
    this.formTween
    .to(formBall, {
      x: (formBall.getBoundingClientRect().x  - (formBall.getBoundingClientRect().width / 2)) - form.getBoundingClientRect().y,
      y: form.getBoundingClientRect().y - formBall.getBoundingClientRect().y,
      scale: 1,
      opacity: 1,
      ease:"expo.out",
      duration: 1,
      zIndex: 4,
      width: '30px',
      height: '30px',
    })
    .to(['#about-section'], {
      filter: 'blur(20px)',
      scale: 0.9,
      ease:"expo.out",
      opacity: 0.8,
      x: 0,
      duration: 1.8,
    },'<')
    .to(['.paint-dot-container'], {
      filter: 'blur(20px)',
      scale: 0.9,
      ease:"expo.out",
      opacity: 0.8,
      x: 0,
      duration: 1.8,
    })
    .to(formBall, {
      x: form.getBoundingClientRect().x + (form.getBoundingClientRect().width / 2),
      y: 0,
      scale: 1.1,
      ease: "power4.inOut",
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
      zIndex: 4333
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

    this.$GSDevTools.create({
      animation: 'intros'
    });

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
