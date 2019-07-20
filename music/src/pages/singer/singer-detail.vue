<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="title"
      :bgImg="bgImg"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Api from 'api/singer'
import MusicList from 'components/musicList/musicList'
import { createSong } from 'common/js/song'
export default {
  name: 'singer-detail',
  data: () => ({
    songs: []
  }),
  components: {
    MusicList
  },
  computed: {
    ...mapState(['singer']),
    bgImg () {
      return this.singer.avatar
    },
    title () {
      return this.singer.name
    }
  },
  methods: {
    _getSingerDetail () {
      Api.getSingerDetail(this.singer.id).then(res => {
        if (res.code == 0) {
          this.songs = this.normalizeSongs(res.data.list)
        }
      })
    },
    normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  created () {
    if (!this.singer.id) {
      this.$router.push('/singer')
      return false
    }
    this._getSingerDetail()
  }
}
</script>

<style scoped lang="stylus">
@import "~common/styles/variable.styl"
.singer-detail
  position fixed
  left 0
  top 0
  width 100%
  height 100%
  z-index 11
  background $color-background
</style>
