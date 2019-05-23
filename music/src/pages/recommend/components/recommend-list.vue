<template>
  <div class="recommend-list" v-if="showRecommend">
    <h1 class="list-title">热门歌单推荐</h1>
    <ul class="list-items">
      <router-link tag="li" class="list-item" v-for="(item, index) in discList" :key="index" :to="{path: item.linkUrl}">
        <div class="icon">
          <img v-lazy="item.imgurl" alt="">
        </div>
        <div class="text">
          <h2 class="name" v-html="item.creator.name"></h2>
          <p class="desc" v-html="item.dissname"></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'recommend-list',
  props: {
    discList: {
      type: Array
    }
  },
  computed: {
    showRecommend () {
      return this.discList.length
    }
  }
}
</script>

<style scoped lang="stylus">
.recommend-list
  .list-title
    height: 65px
    line-height: 65px
    text-align: center
    font-size: $font-size-medium
    color: $color-theme
  .list-items
    padding 0 20px
    .list-item
      display flex
      justify-items center
      margin-bottom 20px
      .icon
        margin-right 20px
        width 60px
        overflow hidden
        height 0
        padding-bottom 60px
        img
          vertical-align top
          width 100%
      .text
        display flex
        flex-direction column
        flex 1
        line-height 20px
        overflow hidden
        font-size 14px
        justify-content center
        h2
          margin-bottom 10px
          color #fff
        p
          color: rgba(255,255,255,0.3)
</style>
