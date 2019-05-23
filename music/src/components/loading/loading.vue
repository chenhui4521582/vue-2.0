<template>
<div class="loading">
  <img src="./loading.gif" alt="">
</div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style scoped lang="stylus">
@import "~common/styles/variable.styl"
.loading
  width 100%
  text-align center
  img
    width 24px
    height 24px
</style>
