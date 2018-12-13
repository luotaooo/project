<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-icon">&#xe623;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont">&#xe623;</span>
        </div>
      </router-link>
      热门城市
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/common.styl"
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(4,4,4,.8)
    text-align center
    line-height .8rem
    .header-abs-icon
      color #ffffff
      font-size .4rem
  .header-fixed
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    .header-left
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
