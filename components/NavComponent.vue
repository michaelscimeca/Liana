<template>
<nav id="nav-bar">
  <ul id="section-nav">
    <li class="active">About</li>
    <li>Journey</li>
    <li>Career</li>
  </ul>
  <ul id="language-nav">
    <li @click="changeToEnglish" class="active"><span>English</span></li>
    <li @click="changeToSpanish"><span>Spanish</span></li>
  </ul>
</nav>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      paragraphTween: null,
    };
  },
  computed: {
    navData: function() {
      return this.$store.state.navData;
    },
    imagesToLoad: function() {
      const imgUrls = [];
      for (let i in this.$store.state.navData) {
        imgUrls.push(this.$store.state.navData[i].thumbnail);
      };
      return imgUrls;
    }
  },
  methods: {
    changeToEnglish: function() {
      console.log('back to english')
      // this.englishTween.reverse()
    },
    changeToSpanish: function() {
      console.log('back to spanish')
      // this.englishTween.play()
    },
    introAnimation: function() {},
    isRouteActive: function(index) {
      if (index === 0 && this.$route.path === '/') {
        return true;
      } else if (index === 0 && this.$route.path === `/${this.navData[0].slug}`) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {
    this.$nuxt.$on('heroAnimFinished', this.introAnimation);

  },
  beforeDestroy: function() {

  }
};
</script>

<style lang="scss" scoped>
</style>
