<template>
  <div class="container" @click="handleGallaryClick">
    <div class="warp">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true,
        loop: true,
        autoplay: true
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    z-index 99
    .warp
      width 100%
      height 0
      padding-bottom 100%
      .swiper-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem

</style>
