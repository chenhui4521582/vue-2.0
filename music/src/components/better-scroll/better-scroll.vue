<template>
    <div class="better-scroll" ref="better-scroll">
      <slot></slot>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'better-scroll',
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array
    }
  },
  methods: {
    _initScroll () {
      let element = this.$refs['better-scroll']
      if (!element) { return false }
      this.Scroll = new Bscroll(element, {
        probeType: this.probeType,
        click: this.click
      })
      if (this.listenScroll) {
        this.Scroll.on('scroll', pos => {
          this.$emit('scrollCallBack', pos)
        })
      }
    },

    refresh () {
      this.Scroll && this.Scroll.refresh()
    },
    resize () {
      window.addEventListener('resize', () => {
        this._refresh()
      })
    }
  },
  mounted () {
    this._initScroll()
    this.resize()
  },
  watch: {
    data () {
      this.refresh()
    }
  }
}
</script>

<style scoped lang="stylus">
.better-scroll
  height 100%
  overflow hidden
</style>
