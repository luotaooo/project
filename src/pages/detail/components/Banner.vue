<template>
  <div>
    <div class="banner" @click="handleBnaner">
      <img class="banner-img" src="" alt="">
      <div class="banner-info">
        <div class="banner-title">大叔大婶多</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe610;</span>12</div>
      </div>
    </div>
    <common-gallary @close="handleClose" v-show="showGallary" :imgs="imgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://img1.qunarzz.com/p/tts5/1811/8a/aa40b8ca73bf8102.jpg_r_640x420x90_7eb8c45e.jpg',
        'https://img1.qunarzz.com/p/tts5/1811/32/e018fbf9904b2402.jpg_r_1280x840x90_ca05084d.jpg']
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
