<template>
  <div class="singer-list">
    <better-scroll
      ref="better-scroll"
      :data="singerData"
      :listenScroll="true"
      @scrollCallBack = "scrollCallBack"
    >
      <div class="scroll-box" >
        <div class="singer-item"
          v-for="(item, index) in singerData"
          :key="index"
          ref="scroll-box"
        >
          <h5>{{item.title}}</h5>
          <div class="group">
            <div class="list"
              v-for="(inlineItems, inlineIndex) in item.items"
              :key="inlineIndex"
              @click="__searchSinger(inlineItems)"
            >
              <div class="avatar">
                <img v-lazy="inlineItems.avatar" alt="">
              </div>
              <div class="name">
                {{inlineItems.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </better-scroll>
    <div class="letter"
      ref="letter"
      @touchstart.stop="letterTouchStart"
      @touchmove.stop="letterTouchMove"
      @touchstop.stop="letterTouchStop"
    >
      <ul>
        <li
          v-for="(item, index) in singerData"
          :key="index"
          :class="{'current' : currentIndex == index}"
        >
          {{judgeName(item)}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'components/better-scroll/better-scroll'

export default {
  name: 'singer-list',
  props: {
    singerData: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    currentIndex: 0,
    GroupHeight: [],
    scrollY: 0,
    touchLock: false,
    timer: null,
    letterIndex: 0
  }),
  components: {
    BetterScroll
  },
  methods: {
    scrollCallBack (pos) {
      this.scrollY = Math.floor(pos.y)
    },
    judgeName (item) {
      return item.title == '热门' ? '热' : item.title
    },
    _countGroupHeight () {
      let element = this.$refs['scroll-box']
      let height = 0
      this.GroupHeight.push(height)
      element.forEach(item => {
        height += item.clientHeight
        this.GroupHeight.push(height)
      })
    },
    letterTouchStart () {
      this.touchLock = true
    },
    letterTouchMove (e) {
      if (this.touchLock) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let element = this.$refs.letter
          let top = element.offsetTop + 108
          let touchY = e.touches[0].clientY;
          let index = Math.floor((touchY - top) / 20)
          if (index >= 0 && index < this.singerData.length) {
            let scrollToElement = this.$refs['scroll-box'][index]
            this.$refs['better-scroll'].scrollToElement(scrollToElement)
          }
        }, 30)
      }
    },
    letterTouchStop () {
      this.touch = false
    },
    __searchSinger (item) {
      this.$emit('__searchSinger', item)
    }
  },
  mounted () {
    this._countGroupHeight()
  },
  watch: {
    scrollY (newValue) {
      if (newValue >= 0) {
        this.currentIndex = 0
      }
      for (var i = 0, len = this.GroupHeight.length; i < len; i++) {
        let startPostion = this.GroupHeight[i]
        let endPostions = this.GroupHeight[i + 1]
        if (-newValue >= startPostion && -newValue < endPostions) {
          this.currentIndex = i
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/styles/variable.styl"
.singer-list{
  height 100%
}
.singer-item
  h5
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    background: #333;
  .group
    padding-bottom 20px
    .list
      display: flex;
      align-items: center;
      padding: 20px 0 0 20px;
      justify-items flex-start;
      .avatar
        padding-bottom 50px;
        width: 50px;
        height: 0;
        overflow hidden;
        border-radius: 50%;
        img
          vertical-align top
          width 100%
      .name
        margin-left: 20px;
        color: rgba(255,255,255,0.5);
        font-size: 14px;
.letter
  position: absolute
  z-index: 10
  right: 0
  top: 10%
  width: 20px
  padding: 20px 0
  border-radius: 10px
  text-align: center
  background: $color-background-d
  font-family: Helvetica
  li
    box-sizing border-box
    height 20px
    line-height 20px
    padding: 3px
    color: $color-text-l
    font-size: $font-size-small
    &.current
      color: $color-theme

</style>
