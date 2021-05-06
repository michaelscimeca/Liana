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
        <div class="float"><div class="bulb one"></div></div>
        <div class="float"><div class="bulb two"></div></div>
        <div class="float"><div class="bulb three"></div></div>
        <div class="float"><div class="bulb four"></div></div>
        <div class="float"><div class="bulb six"></div></div>
        <div class="float"><div class="bulb seven"></div></div>
        <div class="float"><div class="bulb eight"></div></div>
        <div class="float"><div class="bulb nine"></div></div>
      </div>
      <div id="small-btn" ref="smallBtn" @mouseleave="ballleave" @mouseover="ballover">
        <svg fill="none"><path id="path" d="M50,25c0,13.81-11.19,25-25,25c-7.18,0-14.24-1.98-18.8-6.83C1.99,38.7,0,31.63,0,25c0-6.8,1.89-13.53,6.29-18.04
          C10.83,2.31,17.99,0,25,0c6.42,0,13.28,1.9,17.7,5.88C47.8,10.46,50,17.61,50,25z"/></svg>
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
      scale: 0.8,
      duration: options.duration,
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
    .to(floaters, {
      scale: 1,
      x: 0,
      y: 0,
      ease:"expo.out",
      opacity: 1,
      duration: 1,
      rotate: '-0deg',

      },'<')

    // this.ballTwoTween.to(".bulb.nine", {
    //   duration: 11,
    //   repeat: -1,
    //   repeatDelay: 0,
    //   ease: "power1.inOut",
    //   motionPath:{
    //     path: "#path",
    //     align: "#path",
    //     autoRotate: false,
    //     alignOrigin: [0.5, 0.5]
    //   }
    // });
  },
  beforeDestroy: function () {
  }
};
</script>

<style lang="scss" scoped>
</style>
