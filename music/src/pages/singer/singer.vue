<template>
  <div class="singer">
    <singer-list
      v-if="showList"
      :singerData="singerData"
      @__searchSinger="__searchSinger"
    />
    <div class="loading" v-if="!showList">
      <loading />
    </div>
    <!--新手详情路由-->
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Api from 'api/singer'
import singerList from './components/singer-list'
import Loading from 'components/loading/loading'
import { mapMutations } from 'vuex'
export default {
  name: 'singer',
  data: () => ({
    singerData: []
  }),
  components: {
    singerList,
    Loading
  },
  methods: {
    ...mapMutations({
      setSinger: 'SET_SINGER'
    }),
    __searchSinger (e) {
      this.setSinger(e)
      this.$router.push({
        path: `/singer/${e.id}`
      })
    },
    _getSinger () {
      Api.getSinger().then(res => {
        let { code, data } = res
        if (code == 0) {
          this.singerData = this.sortData(data.list)
        }
      })
    },
    concatData (item) {
      return {
        id: item.Fsinger_mid,
        avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`,
        name: item.Fsinger_name
      }
    },
    sortData (list) {
      let map = {
        hot: {
          title: '热门',
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < 10) {
          map.hot.items.push(this.concatData(item))
        } else {
		  if (!map[item.Findex]) {
            map[item.Findex] = {
			  title: item.Findex,
			  items: []
            }
		  }
		  map[item.Findex].items.push(this.concatData(item))
        }
      })
      let hot = []; let singer = []
      for (let i in map) {
        let value = map[i]
        if (value.title == '热门') {
          hot.push(value)
        }
        if (value.title.match(/[a-zA-z]/)) {
          singer.push(value)
        }
      }
      singer.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(singer)
    }
  },
  computed: {
    showList () {
      return this.singerData.length
    }
  },
  created () {
    this._getSinger()
  }
}
</script>

<style scoped lang="stylus">
@import "~common/styles/variable.styl"
.singer
  position fixed
  top 88px
  left 0
  right 0
  bottom 0
.loading
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
