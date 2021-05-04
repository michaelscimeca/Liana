<template>
  <section ref="content" id="about-section">
    <div id="logo" ref="logo"></div>

    <div class="content">
      <div ref="name" class="name">Liana V. Bran</div>



      <svg>
      	<defs>
      		<filter id="filter" x="-20%" y="-20%" width="140%" height="140%">
      			<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred"/>
      			<feColorMatrix in="blurred" type="matrix"
      										 values="1 0 0 0 0
      														 0 1 0 0 0
      														 0 0 1 0 0
      														 0 0 0 19 -9" result="goo"/>
      			<feBlend in="SourceGraphic" in2="goo" />
      		</filter>
      	</defs>
      </svg>
      <div ref="title" class="title">Director of Expansion Strategy at Cara Colletive</div>
      <p ref="paragraphEnglish">
        <span class="english">
          Experienced program director with a demonstrated history of working in the nonprofit sector. Skilled in systems thinking; program development and implementation; community stakeholder and partner engagement. Strong social impact professional graduating from the University of Chicago Booth School of Business in Summer 2020.
        </span>
        <span class="spanish">
          Director de programa experimentado con un historial demostrado de trabajo en el sector sin fines de lucro. Experto en pensamiento sistémico; desarrollo e implementación de programas; participación de las partes interesadas de la comunidad y los socios Profesional de fuerte impacto social egresado de la Escuela de Negocios Booth de la Universidad de Chicago en el verano de 2020.
        </span>
      </p>

      <div class="holder">
          <div class="btn" ref="btn">
            <span class="english">
              Hi, I'm Liana I would love to hear from you.
            </span>
            <span class="spanish">
              Hi, I'm Liana I would love to hear from you.
            </span>
          </div>
      </div>
    </div>

  </section>
</template>
<script>

export default {
  data () {
    return {
      nameTween: null,
      titleTween: null,
      paragraphTween: null,
      logoTween: null,
      btnTween: null,
    };
  },
  computed : {
  },
  methods: {
  },
  mounted: function () {

    const Splitting = require('splitting');
    const title = Splitting({ target: this.$refs.title, by: 'chars' });
    const paragraph = Splitting({ target: this.$refs.paragraphEnglish, by: 'chars' });
    const english = Splitting({ target: this.$refs.paragraph, by: 'chars' });
    const spanish = Splitting({ target: this.$refs.paragraph, by: 'chars' });

    this.nameTween = this.$gsap.timeline();
    this.titleTween = this.$gsap.timeline();
    this.paragraphTween = this.$gsap.timeline();
    this.logoTween = this.$gsap.timeline();
    this.btnTween = this.$gsap.timeline();

    let options = {
      duration: 1.5,
    }
    // this.titleTween
    // .set(this.$refs.content, {
    //   opacity: 0,
    //   rotateY: '40deg',
    //   scale: 0.8,
    //   filter: 'blur(20px)',
    //   // transformOrigin: 'top left',
    //   rotateY: '16deg',
    // })
    // .to(this.$refs.content, {
    //   opacity: 1,
    //   rotateY: '0deg',
    //   scale: 1,
    //   filter: 'blur(0px)',
    //   duration: options.duration,
    //   ease: "power4.inOut",
    // },"<")

    // this.titleTween
    // .set(title[0].words, {
    //   y: 0,
    //   transformOrigin: 'top left',
    //   rotateY: '16deg',
    //   filter: 'blur(10px)',
    // })
    // .set(paragraph[0].words, {
    //   y: 0,
    //   transformOrigin: 'top left',
    //   rotateY: '16deg',
    //   filter: 'blur(10px)',
    // })
    // .to(title[0].words, {
    //   y: 0,
    //   rotateY: 0,
    //   duration: options.duration,
    //   filter: 'blur(0px)',
    //   stagger: (i) => { return i * 0.05 },
    //   ease: "power4.in",
    // },"<")
    // .to(paragraph[0].words, {
    //   y: 0,
    //   rotateY: 0,
    //   duration: options.duration,
    //   filter: 'blur(0px)',
    //   stagger: (i, list, length) => {
    //      return ((Math.floor(Math.random() * length.length)) /  (length.length / 0.1));
    //    },
    //   ease: "power4.inOut",
    // },"<")
    //



    // this.nameTween
    // .set(this.$refs.name, {
    //   rotateY: '80deg',
    //   scale: 0.8,
    // })
    // .to(this.$refs.name, {
    //   rotateY: '0deg',
    //   scale: 1,
    //   opacity: 1,
    //   duration: options.duration,
    //   stagger: (i) => { return i * 0.0014 },
    //   ease: "power4.inOut",
    // },"<")
    //
    // this.logoTween
    // .set(this.$refs.logo, {
    //   rotateY: '80deg',
    //   scale: 0.8,
    //   opacity: 0,
    // })
    // .to(this.$refs.logo, {
    //   rotateY: '0deg',
    //   scale: 1,
    //   opacity: 1,
    //   duration: options.duration,
    //   stagger: (i) => { return i * 0.0014 },
    //   ease: "power4.inOut",
    // },"<")
    //

    // this.btnTween
    // .set(this.$refs.btn, {
    //   y: 25,
    //   rotateY: '10deg',
    // })
    // .to(this.$refs.btn, {
    //   y: 0,
    //   rotateY: 0,
    //   duration: options.duration,
    //   stagger: (i) => { return i * 0.0014 },
    //   ease: "power4.inOut",
    // },"<")
  },
  beforeDestroy: function () {
  }
};
</script>

<style lang="scss" scoped>
</style>
