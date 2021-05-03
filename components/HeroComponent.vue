<template>
  <section id="hero" ref="hero">
    <div class="row">
      <main class="small-6 column">
        <LianaComponent/>
      </main>
      <aside class="small-6 column">
        <HeroContentComponent/>
      </aside>
    </div>
  </section>
</template>
<script>
// import { TimelineMax, gsap } from 'gsap';
import LianaComponent from '~/components/LianaComponent.vue';
import HeroContentComponent from '~/components/HeroContentComponent.vue';

export default {
  data () {
    return {
      tl: null,
      messageTl: null,
      messageTl2: null,
      useShortTransition: false,
      body: null
    };
  },
  components: {
    LianaComponent,
    HeroContentComponent
  },
  computed : {
    message: function () {
      return this.$store.state.stickyNote.message;
    },
    index: function () {
      return this.$store.state.stickyNote.index;
    },
    color: function () {
      return this.$store.state.stickyNote.color;
    }
  },
  methods: {
    onMouseLeave () {},
    onMouseEnter () {},
  },
  mounted: function () {

  },
  beforeDestroy: function () {
  }
};
</script>

<style lang="scss" scoped>
</style>
