<template>
  <div class="hot-bg">
    <div class="title">周末去哪儿</div>
    <div class="hot-item" v-for="item of list" :key="item.id">
      <div class="warp">
        <img class="hot-item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="hot-info">
        <p class="hot-item-title">{{item.title}}</p>
        <p class="hot-item-desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="price-desc">
      <span class="iconfont price-desc-icon">&#xe7f3;</span>
      <div class="price-desc-info">
        <span class="price-desc-highlight">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHotlist',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .hot-bg
    background-color #eee
    .title
      line-height .8rem
      background-color #eee
      text-indent .2rem
    .hot-item
      display flex
      height 0
      padding-bottom 50%
      overflow hidden
      position: relative;
      margin-bottom: .1rem;
      background: #fff;
      flex-direction column
      .warp
        width 100%
        height 0
        padding-bottom calc(214/640*100%) /*根据实际图片宽高比例*/
        background-color #dadada
        overflow hidden
        .hot-item-img
          width 100%
      .hot-info
        position: relative;
        padding: .14rem .2rem .2rem .2rem;
        .hot-item-title
          font-size: .28rem;
          line-height: .48rem;
          padding-right 1.4rem
          ellipsis()
        .hot-item-desc
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
          padding-right 1.4rem
          ellipsis()
    .price-desc
      margin-top: .1rem;
      padding: .14rem .1rem;
      font-size: .24rem;
      line-height: .32rem;
      background: #fff;
      color: #616161;
      .price-desc-icon
        width: .24rem;
        display: block;
        float: left;
        line-height: .32rem;
        font-size .24rem
      .price-desc-info
        margin-left: .3rem;
      .price-desc-highlight
        font-weight bold
</style>
