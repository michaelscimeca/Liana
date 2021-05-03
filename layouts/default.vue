<template>
  <div id="app" :class="{'touchevents': touchevents, 'no-touchevents': !touchevents}">
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical',
        },
        tablet: {
          smooth: true,
          direction: 'vertical',
        },
      }"
    >
    <div class="scroll" data-scroll-section>
      <NavComponent />
      <nuxt />
    </div>
   </LocomotiveScroll>

  </div>
</template>

<script>
import touchevents from '~/mixins/touchevents';

// components
import NavComponent from '~/components/NavComponent.vue';

export default {
  mixins: [
    touchevents
  ],
  components: {
    NavComponent,
  },
  data () {
    return {
      showSite: true,
      tween: null,
      largeText: []
    };
  },
  watch: {
    $route: function (to, from) {
      this.$store.commit('global/onTheClient');
    },
  },
  computed: {
    touchevents () {
      return this.$store.state.global.touchevents;
    },
    heroKey () {
      return this.$store.state.global.heroKey;
    }
  },
  methods: {
    onResize: function () {
      if (window.innerWidth < 768) {
        this.$data.showSite = false;
      } else if (window.innerHeight < 600) {
        this.$data.showSite = false;
      } else {
        this.$data.showSite = true;
      }
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed: function () {
    window.removeEventListener('resize', this.onResize);
  }
};
</script>

<style lang="scss" scoped>

</style>
