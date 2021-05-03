<template>
  <ScrollAnimation
  el="section"
  :animation="runRA"
  :reset="reset"
  :propClasses="{
    'next-project-component no-top-section': true,
    }"
    >
    <div class="row align-center">
      <div class="small-12 columns">
        <NuxtLink v-if="project.slug" ref="link" class="next-link":to="`/${project.slug}`" v-on:click.native="setHeroTransition">
          <div ref="circleContainer" id="circle-container">
            <div ref="ringOne" id="ring-one"></div>
            <div ref="ringTwo" id="ring-two"></div>
            <div id="content">
              <div ref="clip" class="clip">
                <div ref="img" class="img" :style="{ backgroundImage: `url(${project.thumbnail})` }"></div>
              </div>
              <h4 ref="h4">Next Campaign</h4>
              <h3 ref="h3">{{project.name}}</h3>
            </div>
          </div>
        </NuxtLink>
        <div v-else>
          <div id="thank-you-container">
            <div ref="icon" class="icon">✌️</div>
            <h3 ref="agancyname">Red Square Agency</h3>
            <ul class="places">
              <li>Mobile, AL</li>
              <li>Chicago, IL</li>
              <li>Tulsa, OK</li>
            </ul>
            <a ref="homeLink" target="_blank" href="https://www.redsquareagency.com/" class="see-more">See More At Rsq.com</a>
          </div>
        </div>
      </div>
    </div>
  </ScrollAnimation>
</template>

<script>
import gsap from 'gsap';

// components
import ScrollAnimation from '~/components/ScrollAnimation';

export default {
  components: {
    ScrollAnimation
  },
  props: {
    project: Object
  },
  data () {
    return {
      h3: [],
      h4: [],
      tl: null,
      tlh: null,
    };
  },
  methods: {
    setHeroTransition: function () {
      this.$nuxt.$emit('setHeroTransition');
    },
    runRA: function() {
      if(document.querySelector('.next-project-component a.next-link')) {
        const options = {
          duration: 1,
        }
        // Hover
        this.tlh
        .to(this.$refs.ringOne, {
          scale: 0.1,
          opacity: 0.2,
          y: -5,
          duration: options.duration + 0.4,
          ease: "power2.inOut",
        },'<').to(this.$refs.ringTwo, {
          scale: 0.1,
          opacity: 0.2,
          duration: options.duration + 0.2,
          ease: "power2.inOut",
        },'<=+100').to(this.$refs.clip, {
          ease: "power2.inOut",
          scale: 1.4,
          duration: options.duration + 0.2,
        },'<').to(this.$refs.img, {
          scale: 1,
          ease: "power2.inOut",
          duration: options.duration + 0.4,
        },'<').to(this.$refs.h3, {
          y: -16,
          ease: "power2.inOut",
          rotationX: 22,
          scale: 0.9,
          duration: options.duration,
        },'<').to(this.$refs.h4, {
          ease: "power2.inOut",
          rotationX: 22,
          scale: 0.9,
          y: -6,
          duration: options.duration,
        },'<');

        this.tl
        .set(this.$refs.img, {
          y: 0,
          x: 0,
          rotate: '-5deg',
        })
        .set(this.$refs.h3, {
          y: 10,
          x: 0,
        })
        .set(this.$refs.h4, {
          y: 10,
          x: 0,
        })
        .to(this.$refs.clip, {
          duration: 1.2,
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          ease: "power1.inOut",
          onComplete: () => {
            this.$refs.link.$el.addEventListener('mouseenter', () => this.tlh.play());
            this.$refs.link.$el.addEventListener('mouseleave', () => this.tlh.reverse());
            // window.dispatchEvent(new Event('mouseenter'));

          }
        })
        .to(this.$refs.img, {
          duration: 1.2,
          opacity: 1,
          scale: 1.4,
          rotate: '0deg',
          ease: "power1.inOut",
        }, "<0.2")
        .to(this.$refs.ringOne, {
          duration: 1.5,
          opacity: 1,
          y: 0,
          x: 0,
          height: '100%',
          width: '100%',
          ease: "power1.inOut",
        },'<')
        .to(this.$refs.ringTwo, {
          duration: 1.5,
          opacity: 1,
          y: 0,
          x: 0,
          height: '100%',
          width: '100%',
          ease: "power1.inOut",
        }, "<=-0.3")
        .to(this.$refs.h4, {
          duration: 1,
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power2.inOut",
        },"<+0.5")
        .to(this.$refs.h3, {
          duration: 1,
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power2.inOut",
        },"<+.15");


      } else {
        let places = [...document.querySelectorAll('.places li')];
        // console.log(places)
        this.tl
        .set(this.$refs.icon, {
          y: 10,
          rotate: '-33deg',
          scale: 0.3,
          opacity: 0,
        })
        .set(this.$refs.agancyname, {
          opacity: 0,
          y: 10,
        })
        .set(places, {
          opacity: 0,
          y: 10,
        })
        .set(this.$refs.homeLink, {
          opacity: 0,
          y: 10,
        })
        .to(this.$refs.agancyname, {
          duration: 1.2,
          opacity: 1,
          y: 0,
          ease: "power3.inOut",
        })
        .to(this.$refs.icon, {
          duration: 0.9,
          opacity: 1,
          scale: 1,
          rotate: '0deg',
          ease: "power3.inOut",
        }, "<+0.5")
        .to(places, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.inOut",
          stagger: 0.08
        }, "<-0.2")
        .to(this.$refs.homeLink, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.inOut",
        }, "<+0.4")
      }
    },
    reset: function () {
      if(document.querySelector('.next-project-component a.next-link')) {
        this.tl.set([this.$refs.img],{ clearProps: 'scale, opacity, transform' })
        this.tl.set([this.$refs.ringOne,this.$refs.ringTwo,this.$refs.clip,this.$refs.h4,this.$refs.h3], { clearProps: 'all'})
      }
    },
  },
  mounted: function () {
    this.tl = gsap.timeline( );
    if(document.querySelector('.next-project-component a.next-link')) {
      this.tlh = gsap.timeline({ paused	: true });
    }
  },
  beforeDestroy: function () {
    this?.tl?.kill();
    this?.tlh?.kill();

  }
};
</script>

<style lang="scss" scoped>

</style>
