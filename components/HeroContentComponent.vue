<template>
  <section id="about-section" ref="content">

    <div id="logo" ref="logo"></div>
    <svg>
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred"/>
          <feColorMatrix in="blurred" type="matrix"  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo"/>
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
      <!-- <div id="form-ball" ref="formBall"></div> -->

      <div id="bulb-container">
        <div class="bulb-position"><div class="light-flicker"><div class="bulb one"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb two"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb three"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb four"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb six"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb seven"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb eight"></div></div></div>
        <div class="bulb-position"><div class="light-flicker"><div class="bulb nine"></div></div></div>
      </div>

      <div class="float-hide" ref="orbitable">
        <div class="bulb-orbit"></div>
      </div>

      <div id="small-btn" ref="smallBtn" @mouseleave="ballleave" @mouseover="ballover">

        <svg fill="none">
          <path id="path" d="M47.3,22.7c0,12.5-10.6,22.7-23.6,22.7c-6.6,0-12.6-2.6-16.9-6.9C2.6,34.4,0,28.8,0,22.7C0,10.2,10.6,0,23.6,0
          S47.3,10.2,47.3,22.7z"/> </svg>
          <span class="english">Hi!</span>
        </div>

        <div id="btn" ref="btn" @mouseleave="ballleave" @mouseover="ballover">
          <span class="english">Hi! I'm Liana I would love to hear from you.</span>
        </div>
      </div>

    </section>
  </template>
  <script>
  import $ from 'jquery';
  export default {
    data () {
      return {
        y: 0,
        store: {
          pX: 0,
          pY: 0,
          nX: 0,
          nY: 0,
        }
      };
    },
    watch: {
      position: function(oldVal, newVal) {
        this.$data.y = newVal;
        this.$ScrollTrigger.update();
      }
    },
    computed: {
      position: function() {
        return this.$store.state.locomotive.scroll.y
      }
    },
    methods: {
      ballover: function() {
        this.btnTween.play()
      },
      ballleave: function() {
        this.btnTween.reverse()
      },
    },
    mounted: function () {
      const Splitting = require('splitting');
      const titleConvert = Splitting({ target: this.$refs.title, by: 'chars' });
      const paragraphConvert = Splitting({ target: this.$refs.paragraph.children[0], by: 'chars' });

      const title= titleConvert[0].chars;
      const paragraph = paragraphConvert[0].chars;


      const bulbsPosition = [...document.querySelectorAll('#bulb-container .bulb-position')];
      const bulbs = [...document.querySelectorAll('#bulb-container .bulb')];

      const formBall = document.querySelector(".bulb-orbit");
      const press = document.querySelector("#btn");
      // press.addEventListener('click', () => {
      //   this.ballTwoTween.pause();
      // })
      this.container = document.querySelector('.js-locomotive .scroll');
      const _this = this;

      this.$ScrollTrigger.scrollerProxy(_this.container, {
        scrollTop(value) {
          return arguments.length ? _this.container.scrollTo(value, 0, 0) : _this.$data.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      this.floatingaround = this.$gsap.timeline({ repeat: -1})

      let options = {
        duration: 1.5,
      }

      this.interoTween = this.$gsap.timeline({id: 'intro'});

      this.interoTween
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
      .set(title, {
        x: 20,
        y: 0,
        opacity: 0,
      })
      .set(paragraph, {
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
      .set(bulbsPosition, {
        x: 20,
        y: 5,
        scale: 3.1,
        opacity: 0,
        rotate: '-145deg',
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
        opacity: 0.3,
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
      .to(title, {
        x: 0,
        y: 0,
        ease:"expo.out",
        opacity: 1,
        duration: 1.8,
      },'<+0.3')
      .to(paragraph, {
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

      .to(bulbsPosition , {
        scale: 1,
        x: 0,
        y: 0,
        ease: "power4.out",
        opacity: 1,
        duration: 3,
        rotate: '0deg',
        // onComplete: () => {
        //   this.floatingaround
        //   .to('.f', {
        //     x: () => {
        //       this.store.nX = this.$gsap.utils.random(133, 0);
        //       this.store.pX = this.store.nX
        //       return this.store.pX
        //     },
        //     y: () => {
        //       this.store.nY = this.$gsap.utils.random(133, 0);
        //       this.store.pY = this.store.nY
        //       return this.store.nY
        //     },
        //     duration: 12,
        //   }).to('.f',{
        //     x: this.store.pX,
        //     y: this.store.pY,
        //   })
        // }
      },'<-1.5')
      .to(formBall, {
        opacity: 1,
        duration: 1,
      })

      /// Btn
      this.btnTween = this.$gsap.timeline( { paused: true} );

      this.btnTween
      .to('.light-flicker', {
        x: 0,
        y: 0,
        rotate: 0,
        ease:"expo.in",
        duration: 0,
        ease: "power4.inOut",
      })
      .to(bulbs, {
        x: (i) => { return i * 20 },
        y: 10,
        filter: 'blur(0px)',
        ease: "power4.inOut",
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: (i) => { return i * 0.004}
      },'<-0.2')
      .to(this.$refs.orbitable, {
        opacity: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
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

      //
      // this.$GSDevTools.create({
      //   animation: 'intro'
      // });
      // Btn Orbit Ball
      this.ballTwoTween = this.$gsap.timeline();

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

      // press.addEventListener('click', () => {
      //   this.ballTwoTween.pause();
      // })
    },
    beforeDestroy: function () {
    }
  };
  </script>

  <style lang="scss" scoped>
  </style>
