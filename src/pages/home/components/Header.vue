<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe729;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe615;</span>  输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe607;</span>
      </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .header
    display flex
    height .86rem
    background $bgColor
    color #fff
    flex-direction row
    align-items center
    justify-content space-between
    position fixed
    width 100%
    z-index 11
  .header-left
    width .64rem
    float left
    text-align center
    font-size .4rem
  .header-input
    flex 1
    height .64rem
    background #fff
    border-radius .1rem
    color #ccc
    line-height .64rem
    padding-left .2rem
    margin-left .2rem
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    color #fff
    text-align center
    .arrow-icon
      font-size .24rem
</style>
