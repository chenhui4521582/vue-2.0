<template>
  <div id="music">
    <m-header />
    <m-nav />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/mHeader/m-header'
import MNav from 'components/mNav/m-nav'
export default {
  name: 'App',
  components: {
    MHeader,
    MNav
  }
}
</script>
<style scoped lang="stylus">
  @import "common/styles/variable.styl"
  #music
    color: $color-theme
</style>
