<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont">&#xe623;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .header
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    position relative
  .header-left
    position absolute
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
