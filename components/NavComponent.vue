<template>
  <nav id="nav-bar">
    <div class="row">
      <div class="small-offset-1 small-5 column">
        <ul id="section-nav">
          <li class="active">About</li>
          <li>Journey</li>
          <li>Career</li>
        </ul>
      </div>
      <div class="small-3 column">
        <ul id="language-nav">
          <li @click="changeToEnglish" class="active"><span>English</span></li>
          <li @click="changeToSpanish"><span>Spanish</span></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  props: {
  },
  data () {
    return {
      paragraphTween: null,
    };
  },
  computed: {
    navData: function () {
      return this.$store.state.navData;
    },
    imagesToLoad: function () {
      const imgUrls = [];
      for (let i in this.$store.state.navData) {
        imgUrls.push(this.$store.state.navData[i].thumbnail);
      };
      return imgUrls;
    }
  },
  methods: {
    changeToEnglish: function () {
      console.log('back to english')
      // this.englishTween.reverse()
    },
    changeToSpanish: function () {
      console.log('back to spanish')
      // this.englishTween.play()
    },
    introAnimation: function () {
    },
    isRouteActive: function (index) {
      if (index === 0 && this.$route.path === '/') {
        return true;
      } else  if (index === 0 && this.$route.path === `/${this.navData[0].slug}`) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function () {
    this.$nuxt.$on('heroAnimFinished', this.introAnimation);
    this.allEnglish = document.querySelectorAll('.english');
    // this.allSpanish = document.querySelectorAll('.spanish');
    // this.spanishTween = this.$gsap.timeline({ paused:true  });
    this.englishTween = this.$gsap.timeline({ paused:true  });

    // this.englishTween
    // .to(this.allEnglish, {
    //   opacity: 0,
    //   filter: 'blur(20px)',
    //   // visibility: 'hidden',
    // })
    // .to(this.allSpanish, {
    //   opacity: 1,
    //   filter: blur('0px'),
    //   // visibility: 'visible',
    // })

  },
  beforeDestroy: function () {

  }
};
</script>

<style lang="scss" scoped>
</style>
