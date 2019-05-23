<template>
  <div class="banner">
    <swiper :options="options"  v-if="showBanner">
      <swiper-slide v-for="(item, index) in swiperData" :key="index" class="swiper-slide">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="" class="swiper-img">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'banner',
  props: {
    swiperData: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({
        autoplay: true,
        speed: 1000,
        delay: 3000,
        loop: true,
        disableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        observer: true,
        observeParents: true
      })
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    showBanner () {
      return this.swiperData.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/styles/variable"
  .banner
    overflow hidden;
    height 0;
    padding-bottom 40%;
    width 100%
    .swiper-wrapper
      .swiper-img
        width 100%
        height 100%
</style>
<style lang="stylus">
  .swiper-pagination-bullet
    background rgba(0, 0, 0, 1)
  .swiper-pagination-bullet-active
    width 20px
    background rgba(255,255,255,0.8)
    border-radius 5px
</style>
