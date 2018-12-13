<template>
  <div>
    <div class="banner" @click="handleBnaner">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe610;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <common-gallary @close="handleClose" v-show="showGallary" :imgs="gallaryImgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBnaner: function () {
      this.showGallary = true
    },
    handleClose: function () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom  55%
    background #25a4bb
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      display flex
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1
      .banner-num
        margin-top .14rem
        padding 0 .32rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgb(0,0,0.4)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
