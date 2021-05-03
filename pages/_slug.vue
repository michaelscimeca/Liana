<template>
  <section :class="containerClasses">
    <!-- <template v-for="(content, index) in results.content">
      <ProjectComponent v-if="content.type === 'project'" :project="content.data"></ProjectComponent>
      <LargeTextComponent v-else-if="content.type === 'largeText'" :text="content.data.title" :maxWidth="content.data.maxWidth"></LargeTextComponent>
      <SmallTextComponent v-else-if="content.type === 'smallText'" :text="content.data.title"></SmallTextComponent>
    </template>
    <NextProjectComponent v-if="next" :project="next"></NextProjectComponent> -->
  </section>
</template>

<script>
import imagesLoaded from 'imagesloaded';

// mixins
import meta from '~/mixins/meta.js';
import introAnimation from '~/mixins/introAnimation.js';
// components
import ImageComponent from '~/components/ImageComponent.vue';
// import LargeTextComponent from '~/components/LargeTextComponent.vue';


export default {
  transition: {
    name: "slide",
    mode: "out-in",
    css: false,
    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        // filter: 'blur(2004px)',
      });
    },
    enter(el, done) {
      this.$nuxt.$emit('pageChange');
      this.$nuxt.$emit('scrollTop');
      this.$gsap.to(el, {
        opacity: 1,
        duration: 1,
        filter: 'blur(0px)',
        ease: "power3.inOut",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        filter: 'blur(200px)',
        duration: 1,
        ease: "power3.inOut",
        onComplete: done,
      });
    },
  },
  mixins: [
    meta,
    introAnimation
  ],
  components: {
    ImageComponent,
    // LargeTextComponent,
    SmallTextComponent,
    NextProjectComponent,
    ProjectComponent,
  },
  // Data from API / CMS
  async asyncData ({ $content, store, params }) {
    const startOfCampaign = {}

    const results = await $content('campaign', params.slug)
    .fetch();
    let [prev, next] = await $content('campaign')
    .surround(params.slug)
    .sortBy('index')
    .only(['slug', 'thumbnail', 'name', 'path', 'index'])
    .fetch();

    next = (!next) ? startOfCampaign : next;

    store.commit('stickyNote/setStickyContent', { color: results.color, message: results.message, index: results.index });

    return {
      results,
      next
    }
  },
  // data specific to the page and not from the API / CMS
  data () {
    return {
      // `introDuration` is required. The value represents the numebr of ms before the intro animation class is removed from the page
      introDuration: 700,
      ST: null
    };
  },
  computed: {},
  methods: {},
  created: function () {},
  mounted: function () {
    this.animateIn();

    this.$nextTick(() => {
      this.$nuxt.$emit('update-locomotive');
    });

    const preloadImages = () => {
      return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.js-load'), { background: true }, resolve);
      });
    };
    preloadImages().then((e) => {
        this.$nuxt.$emit('pageChange')
        this.$nuxt.$emit('getHeight')
    });

  },
  destroyed: function () {}
};
</script>

<!-- <style src="./work.scss" lang="scss" scoped></style> -->
