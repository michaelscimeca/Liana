<template>
  <component
    :is="el"
    class="animate"
    :class="classes"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: threshold,
      }
    }">
    <slot></slot>
  </component>
</template>
<script>

export default {
  mixins: [],
  props: {
    el: String,
    propClasses: Object,
    threshold: Number,
    delay: String,
    animation: Function,
    reset: Function
  },
  data () {
    return {
      visible: false,
      lastScrollTop: 0,
      timeout: null
    };
  },
  watch: {
    scrollPosition: function (newVal, oldVal) {
      if (newVal > this.$data.lastScrollTop) {
        this.$data.scrollDir = 'down';
      } else {
        this.$data.scrollDir = 'up';
      }
      this.$data.lastScrollTop = newVal <= 0 ? 0 : newVal;
    }
  },
  computed: {
    classes () {
      const visibleClass = { visible: this.$data.visible };
      return { ...visibleClass, ...this.propClasses };
    },
    scrollPosition () {
      return this.$store.state.locomotive.scroll.y;
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      if (isVisible && this.$data.scrollDir === 'down') {
        // Scrolling DOWN into view
        this.$data.timeout = setTimeout(() => {
          this.$data.visible = true;
          this.animation();
        }, parseInt(this.delay));
      } else if (!isVisible && this.$data.scrollDir === 'up') {
        // Scrolling UP out of the section (Reset anything that needs to be reset here)
        if (typeof this.reset === "function") { this.reset(); }
        clearTimeout(this.$data.timeout);
        this.$data.visible = false;
      } else if (isVisible && this.$data.scrollDir === 'up') {
        // Scrolling UP into the section
        // Do Nothing here
      } else if (isVisible && !this.$data.scrollDir) {
        // Section is visible on page load before a scroll direction is determined
        this.$data.timeout = setTimeout(() => {
          this.$data.visible = true;
          this.animation();
        }, parseInt(this.delay));
      }
    }
  },
  mounted () {},
  destroyed () {}
};
</script>

<style lang="scss" scoped>

</style>
