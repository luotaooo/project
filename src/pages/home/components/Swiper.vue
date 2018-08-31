<template>
  <div class="warp">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .warp >>> .swiper-pagination-bullet-active
    /*三个箭头表示穿透执行*/
    background-color #fff
  .warp
    width 100%
    height 0
    overflow hidden
    padding-bottom calc(200/640*100%) /*根据实际图片宽高比例*/
    background-color #dadada
    .swiper-img
      width 100%
</style>
