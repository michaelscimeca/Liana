<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LocomotiveScroll',
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e)
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      },
    },
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions }
    },
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on('update-locomotive', () => {
      this?.locomotive?.update();
    });
    this.$nuxt.$on('scrollTop', () => {
      this?.locomotive?.scrollTo(0, {
        duration: 0,
        callback: () => {
          this.$nuxt.$emit('fireShortTransition');
        }
      });
    });
    this.$nuxt.$on('pageChange', () => {
      this?.locomotive?.update();
    });

    this.$nuxt.$on('holdHero', () => {
      this?.locomotive?.stop();
    });

    this.$nuxt.$on('letGoHero', () => {
      this?.locomotive?.start();
    });


  },
  methods: {
    onScroll(e) {
      if (typeof this.$store._mutations['locomotive/setScroll'] !== 'undefined') {
        this.$store.commit('locomotive/setScroll', {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll, // x, y
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
