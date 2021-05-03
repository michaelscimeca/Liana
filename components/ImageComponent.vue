<template>
  <ScrollAnimation
    el="section"
    :animation="runRA"
    :reset="reset"
    :propClasses="{
      'image-component': true,
      'standard-section': true
    }"
  >
  <div class="row align-center">
    <figure class="small-12 columns">
      <div ref="img-wrapper" class="img-wrapper">
        <div ref="outer" class="outer">
          <div ref="inner" class="inner">
            <div ref="img" class="img" :style="{ backgroundImage: `url(${src})` }"></div>
          </div>
        </div>
      </div>
    </figure>
  </div>
  </ScrollAnimation>
</template>

<script>
import gsap  from 'gsap';
// components
import ScrollAnimation from '~/components/ScrollAnimation';

export default {
  components: {
    ScrollAnimation
  },
  props: {
    src: String
  },
  data () {
    return {
      tl: null,
    };
  },
  methods: {
    imageReadyFire: function() {
      // Wait until images are loaded
      this.$nuxt.$on('getHeight', () => {
        this.container = document.querySelector('.js-locomotive .scroll');
        this.img = document.querySelector('.image-component .img');
        this.inner = document.querySelector('.image-component .inner');

        this.tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.$el,
            scroller: this.container,
            start: '+100 bottom',
            end: '+500 center',
            scrub: true,
            // markers: true
          }
        });
        this.tl
        .to(this.img, {
          rotateX: '0deg',
          scale: 1,
          duration: 1.5,
          ease: "power3.inOut",
        },'<')
        .to(this.inner, {
          duration: 2,
          scale: 1,
          opacity: 1,
          ease: "power4.inOut",
        },'<');
      });
    },
    runRA: function() {
    },
    reset: function () {
       // console.log('example of a reset function');
     },
  },
  mounted: function () {
    this.imageReadyFire();
  },
  beforeDestroy: function () {
    this?.tl?.kill();
  }
};
</script>

<style lang="scss" scoped>
</style>
