<template>
  <div class="nav">
    <router-link tag="div" to="/recommend" class="nav-item">
      <span class="nav-link">
        推荐
      </span>
    </router-link>
    <router-link tag="div" to="/singer" class="nav-item">
      <span class="nav-link">
        歌手
      </span>
    </router-link>
    <router-link tag="div" to="/ranking" class="nav-item">
      <span class="nav-link">
        排行
      </span>
    </router-link>
    <router-link tag="div" to="/search" class="nav-item">
      <span class="nav-link">
        搜索
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'm-nav'
}
</script>

<style scoped lang="stylus">
@import "~common/styles/variable";
.nav
  display flex
  height 44px
  line-height 44px
  font-size @font-size-medium
  .nav-item
    flex 1
    text-align center
    .nav-link
      padding-bottom 5px
      color $color-text-l
    &.router-link-active
      .nav-link
        color $color-theme
        border-bottom 2px solid $color-theme

</style>
