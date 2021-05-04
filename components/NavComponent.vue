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
          <li class="active"><span>English</span></li>
          <li><span>Spanish</span></li>
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
  },
  beforeDestroy: function () {

  }
};
</script>

<style lang="scss" scoped>
</style>
