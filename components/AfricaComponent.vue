<template>
  <section id="location" ref="location">
    <div id="africa" ref="africa" data-scroll data-scroll-speed="0.5">
      <div ref="gray" id="africa-img"></div>
      <div ref="color" id="africa-img-color"></div>
    </div>
  </section>
</template>
<script>

export default {
  mixins: [
  ],
  data () {
    return {
      tween: null,
    };
  },
  methods: {
    clamp: (num, min, max) => { return num <= min ? min : num >= max ? max : num; },
  },

  watch: {
    position: function (oldVal, newVal) {
      this.$data.y = (oldVal - newVal);
      this.$data.p = newVal;
    }
  },
  computed: {
    position: function () {
      return this.$store.state.locomotive.scroll.y
    }
  },

  mounted: function () {
    let options = {
      stagger: 0.01
    }
    // this.tl = this.$gsap.timeline({
    //   scrollTrigger: {
    //     trigger: this.$refs.africa,
    //     scroller: this.container, // this.container is defined in the scrollTriggerInit mixin
    //     start: '+100 bottom',
    //     end: '+1200 center',
    //     scrub: true,
    //     markers: true
    //   }
    // });
    //
    // this.tl
    // .set(this.$refs.color, {
    //   opacity: 0,
    //   scale: 1,
    //
    // })
    // .to(this.$refs.color, {
    //   y: 0,
    //   opacity: 1,
    //   duration: 200,
    //   ease: "power3.inOut",
    //   stagger: options.stagger,
    // })
  },
  beforeDestroy: function () {
  }
};
</script>

<style lang="scss" scoped>
</style>
