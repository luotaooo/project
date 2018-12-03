<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">B</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title">C</div>
          <div class="item-list">
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
            <div class="item">阿拉尔</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float: left
        width 33.33%
        .button
          padding .1rem 0rem
          margin .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
        border-bottom .01rem solid #eee
</style>
