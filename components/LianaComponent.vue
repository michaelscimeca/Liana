<template>
<section id="liana-section" ref="lianaSection">
  <div id="liana-container" class="js-load" ref="lianaCont">
    <div id="mask-container" ref="maskCont">
      <div id="paint-dots-container" ref="dotCont">
        <div class="paint-dot-container">
          <div class="paint-dot" data-scroll data-scroll-speed="0.4"></div>
        </div>
        <div class="paint-dot-container">
          <div class="paint-dot" data-scroll data-scroll-speed="0.6"></div>
        </div>
        <div class="paint-dot-container">
          <div class="paint-dot" data-scroll data-scroll-speed="0.8"></div>
        </div>
        <div class="paint-dot-container">
          <div class="paint-dot" data-scroll data-scroll-speed="1.1"></div>
        </div>
      </div>
      <div id="liana-box">
        <div id="liana" class="js-load" ref="liana" data-scroll data-scroll-speed="-0.5"></div>
        <div id="star-container" ref="starCont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>
    </div>
  </div>

  <HeroContentComponent />

</section>
</template>
<script>
import HeroContentComponent from '~/components/HeroContentComponent.vue';

export default {
  components: {
    HeroContentComponent
  },
  data() {
    return {}
  },
  methods: {
    clamp: (num, min, max) => {
      return num <= min ? min : num >= max ? max : num;
    },
  },
  mounted: function() {
    this.lianaTween = this.$gsap.timeline({
      id: "myTimeline"
    });

    this.lianaTween
      .set(this.$refs.lianaSection, {
        opacity: 0,
        y: 0,
      })
      .set(this.$refs.starCont, {
        y: 110,
        opacity: 0.5,
        scale: 0.4,
        rotate: '20deg',
      })
      .set(this.$refs.lianaCont, {
        scale: 0.9,
        opacity: 0,
        filter: 'blur(10px)',
      })
      .set(this.$refs.liana, {
        filter: 'blur(10px)',

        scale: 0.9,
        opacity: 0,
        y: 0,
      })
      .set(this.$refs.dotCont.children, {
        opacity: 0,
        scale: 0,
      })
      .to(this.$refs.lianaSection, {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1.2,
        ease: "power4.inOut",
      }, "<")
      .to(this.$refs.starCont, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        rotate: '0deg',
        duration: 2,
        ease: "power4.out",
        onComplete: () => {}
      }, "<=-1.2")
      .to(this.$refs.lianaCont, {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
      }, "<+0.1")
      .to(this.$refs.dotCont.children, {
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: "power4.inOut",
        stagger: (i) => {
          return i * 0.03;
        },
        onComplete: () => {
          const tlCan = this.$gsap.timeline({
            repeat: -1
          });
          const options = {
            duration: 200,
          }
          this.$gsap
            .to(this.$refs.dotCont.children[3], {
              duration: options.duration,
              transformOrigin: "center center",
              rotation: -360,
              ease: "linear"
            })
          this.$gsap
            .to(this.$refs.dotCont.children[2], {
              duration: options.duration,
              transformOrigin: "center center",
              rotation: 360,
              ease: "linear"
            })
          this.$gsap
            .to(this.$refs.dotCont.children[1], {
              duration: options.duration,
              transformOrigin: "center center",
              rotation: -360,
              ease: "linear"
            })
          this.$gsap
            .to(this.$refs.dotCont.children[3], {
              duration: options.duration,
              transformOrigin: "center center",
              rotation: 360,
              ease: "linear"
            })
        }
      }, "<+0.5")
      .to(this.$refs.liana, {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1.2,
        y: 0,
        scale: 1,
        ease: "power4.out",
      }, "<+0.6")

  },
  beforeDestroy: function() {}
};
</script>

<style lang="scss" scoped>
</style>
