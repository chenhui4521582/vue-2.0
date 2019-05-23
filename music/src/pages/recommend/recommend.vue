<template>
  <div class="recommend">
    <BetterScroll :data="discList">
      <main>
        <slider :swiperData="swiperData"/>
        <recommend-list :discList="discList"/>
        <div class="loading-container">
          <loading v-if="!discList.length"/>
        </div>
      </main>
    </BetterScroll>
  </div>

</template>

<script>
import Api from 'src/api/recommend'
import Slider from '../../components/banner/banner'
import recommendList from './components/recommend-list'
import BetterScroll from '../../components/better-scroll/better-scroll'
import loading from '../../components/loading/loading'
export default {
  name: 'recommend',
  data: () => ({
    swiperData: [],
    discList: []
  }),
  methods: {
    _getRecommond () {
      Api.getRecommond().then(res => {
        let { code, data } = res
        if (code == 0) {
          this.swiperData = data.slider
        }
      })
    },
    _getDiscList () {
      Api.getDiscList().then(res => {
        this.discList = res.list
      })
    }
  },
  components: {
    Slider,
    recommendList,
    BetterScroll,
    loading
  },
  created () {
    this._getRecommond()
    this._getDiscList()
  }
}
</script>

<style scoped lang="stylus">
.recommend
  position fixed
  left 0
  top 88px
  bottom 0
  right 0
  overflow hidden
  .loading-container
    position absolute
    top 50%
    transform translate(0, -50%)
    width 100%
</style>
