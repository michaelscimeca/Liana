<template>
  <section id="about-section">
    <div id="logo" ref="logo"></div>
    <div class="content">
      <div ref="name" class="name">Liana V. Bran</div>
      <div ref="title" class="title">Director of Expansion Strategy at Cara Colletive</div>
      <p ref="paragraph">Experienced program director with a demonstrated history of working in the nonprofit sector. Skilled in systems thinking; program development and implementation; community stakeholder and partner engagement. Strong social impact professional graduating from the University of Chicago Booth School of Business in Summer 2020.</p>
    </div>
</section>
</template>
<script>
export default {
  data () {
    return {
      titleTween: null,
      paragraphTween: null,
    };
  },
  computed : {
  },
  methods: {
  },
  mounted: function () {
    const Splitting = require('splitting');
    this.titleTween = this.$gsap.timeline();
    this.paragraphTween = this.$gsap.timeline();

    const Title = Splitting({ target: this.$refs.title, by: 'chars' });
    const paragraph = Splitting({ target: this.$refs.paragraph, by: 'chars' });

    this.titleTween
    .set(Title[0].chars, {
      y: 35,
      rotateY: '10deg',
    })
    .to(Title[0].chars, {
      y: 0,
      rotateY: 0,
      duration: 1.2,
      stagger: (i) => { return i * 0.0014 },
      ease: "power4.inOut",
      scrollTrigger: {
        scroller: '.js-locomotive .scroll', // this.container is defined in the scrollTriggerInit mixin
        trigger: this.$refs.paragraph,
        start: 'top bottom',
        end: '+400 center',
        scrub: true,
        markers: true
      }
    },"<")

    this.paragraphTween
    .from(paragraph[0].chars, {
      y: 35,
      rotateY: '10deg',
      opacity: 0,
    })
    .to(paragraph[0].chars, {
      y: 0,
      rotateY: 0,
      opacity: 1,
      duration: '100%',
      stagger: (i) => { return i * 0.0014 },
      ease: "power4.inOut",
    },"<")

  },
  beforeDestroy: function () {
  }
};
</script>

<style lang="scss" scoped>
</style>
