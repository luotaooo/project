<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe729;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe615;</span>  输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe607;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
  body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
  .header
    display flex
    height .86rem
    background $bgColor
    color #fff
    flex-direction row
    align-items center
    justify-content center
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
    margin-left .2rem
    color #ccc
    line-height .64rem
    padding-left .2rem
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      font-size .24rem
</style>
