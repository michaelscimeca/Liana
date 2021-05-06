<template>
  <section id="about-section" ref="content">
    <div id="logo" ref="logo"></div>
    <svg>
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred"/>
          <feColorMatrix in="blurred" type="matrix"   values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo"/>
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="content">
      <div class="name" ref="name" >Liana V. Bran</div>
      <div class="title" ref="title">Director of Expansion Strategy at Cara Colletive</div>
      <p ref="paragraph">
        <span class="english">Experienced program director with a demonstrated history of working in the nonprofit sector. Skilled in systems thinking; program development and implementation; community stakeholder and partner engagement. Strong social impact professional graduating from the University of Chicago Booth School of Business in Summer 2020.</span>
      </p>
    </div>

    <div id="button-container">
      <div ref="bulbContainer" id="bulb-container">
        <div class="float"><div class="f"><div class="bulb one"></div></div></div>
        <div class="float"><div class="f"><div class="bulb two"></div></div></div>
        <div class="float"><div class="f"><div class="bulb three"></div></div></div>
        <div class="float"><div class="f"><div class="bulb four"></div></div></div>
        <div class="float"><div class="f"><div class="bulb six"></div></div></div>
        <div class="float"><div class="f"><div class="bulb seven"></div></div></div>
        <div class="float"><div class="f"><div class="bulb eight"></div></div></div>
        <div class="float"><div class="f"><div class="bulb nine"></div></div></div>
      </div>
      <div class="float-hide" ref="orbitable"><div class="bulb-orbit"></div></div>

      <div id="small-btn" ref="smallBtn" @mouseleave="ballleave" @mouseover="ballover">

        <svg fill="none">
          <path id="path" d="M47.3,22.7c0,12.5-10.6,22.7-23.6,22.7c-6.6,0-12.6-2.6-16.9-6.9C2.6,34.4,0,28.8,0,22.7C0,10.2,10.6,0,23.6,0
          S47.3,10.2,47.3,22.7z"/> </svg>
          <span class="english">Hi!</span>
        </div>
        <div id="btn" ref="btn" @mouseleave="ballleave" @mouseover="ballover">
          <span class="english">Hi,&nbsp; I'm Liana I would love to hear from you.</span>
        </div>
      </div>
    </section>
  </template>
  <script>
  import $ from 'jquery';
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
      ballover: function() {
        this.btnTween.play()
        console.log('hover')
      },
      ballleave: function() {
        this.btnTween.reverse()
        console.log('out')
      },
      getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      },
      getRandomInt: (max) => Math.floor(Math.random() * max)
    },
    mounted: function () {
      const Splitting = require('splitting');
      const title = Splitting({ target: this.$refs.title, by: 'chars' });
      const paragraph = Splitting({ target: this.$refs.paragraph.children[0], by: 'chars' });

      let options = {
        duration: 1.5,
      }

      var randomPos = this.$gsap.utils.random(-1330, 1370, true);
      const headline = title[0].chars;
      const englishP = paragraph[0].chars;
      this.ballTwoTween = this.$gsap.timeline();
      this.btnTween = this.$gsap.timeline( { paused: true} );
      this.tl = this.$gsap.timeline({repeat: -1});

      // console.log([...this.$refs.bulbContainer.children].slice(0, -1))
      const floaters = [...document.querySelectorAll('.float ')];
      const bulbs = [...document.querySelectorAll('.float .bulb')];

      // this.tl.to(floaters, {x:"random(200,280)", y:"random(20,230)", duration:2, delay: (index) => { return index*0.5}});

      // console.log( bulbs)
      this.btnTween
      .to(bulbs, {
        x: (i) => { return i * 35},
        y: 0,
        filter: 'blur(0px)',
        ease:"expo.in",
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: (i) => { return i * 0.004}
      },'<-0.2')
      .to(this.$refs.orbitable, {
        opacity: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: options.duration,
        ease: "power4.inOut",
      },'<')
      .to(this.$refs.btn, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: options.duration,
        ease: "power4.inOut",
      },'<')
      .to(this.$refs.btn, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: options.duration,
        ease: "power4.inOut",
      },'<')
      .to(this.$refs.smallBtn, {
        scale:  1,
        opacity: 1,
        duration: 3,
        backgroundColor: '#b7894a',
        ease: "power4.inOut",
      },'<')

      this.ballsTween = this.$gsap.timeline();

      this.ballsTween
      .set(this.$refs.logo, {
        x: 0,
        y: 5,
        scale: 0.9,
        opacity: 0,
        rotateY: '-15deg',
      })
      .set(this.$refs.name, {
        x: 0,
        y: 5,
        filter: 'blur(115px)',
        opacity: 0,
      })
      .set(headline, {
        x: 20,
        y: 0,
        opacity: 0,
      })
      .set(englishP, {
        x: 20,
        y: 0,
        opacity: 0,
      })
      .set(bulbs, {
        x: () => {
          return this.$gsap.utils.random(-(window.innerWidth / 3), 0)
        },
        y: () => {
          return this.$gsap.utils.random(-(window.innerHeight / 2), 20)
        },
      })
      .set(floaters, {
        x: 20,
        y: 5,
        scale: 3.1,
        opacity: 0,
        rotate: '-145deg',
      })
      .set(this.$refs.orbitable, {
        opacity: 0,
        scale: 0.8,
      })
      .set(this.$refs.smallBtn, {
        x: 20,
        y: 0,
        opacity: 0,
      })
      .to(this.$refs.logo, {
        x: 0,
        y: 0,
        rotateY: '0deg',
        scale: 1,
        ease:"expo.out",
        opacity: 1,
        duration: 1.8,
        delay: 1.4,
        stagger: (i) => {
          return i * 0.04
        }
      },'<')
      .to(this.$refs.name, {
        x: 0,
        y: 0,
        rotateY: '0deg',
        scale: 1,
        filter: 'blur(0px)',
        ease:"expo.out",
        opacity: 1,
        duration: 1.8,
      },'<')
      .to(headline, {
        x: 0,
        y: 0,
        ease:"expo.out",
        opacity: 1,
        duration: 1.8,
      },'<+0.3')
      .to(englishP, {
        x: 0,
        y: 0,
        ease:"expo.out",
        opacity: 1,
        duration: 1,
        stagger: (i) => {
          return i * 0.002
        }
      },'<+0.5')

      .to(this.$refs.smallBtn, {
        x: 0,
        y: 0,
        ease:"expo.out",
        opacity: 1,
        duration: 1,
      },'<+0.5')
      .to(this.$refs.orbitable, {
        x: 0,
        y: 0,
        scale: 1,
        ease:"expo.out",
        opacity: 1,
        duration: 1,
      },'<+0.5')
      .to(floaters, {
        scale: 1,
        x: 0,
        y: 0,
        ease:"expo.out",
        opacity: 1,
        duration: 3,
        rotate: '-0deg',
      },'<-1')

      this.ballTwoTween.to(".bulb-orbit", {
        duration: 11,
        repeat: -1,
        repeatDelay: 0,
        ease: "linear",
        motionPath:{
          path: "#path",
          align: "#path",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
      });
    },
    beforeDestroy: function () {
    }
  };
  </script>

  <style lang="scss" scoped>
  </style>
