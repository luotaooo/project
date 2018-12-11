<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <a class="item-button">查看详情</a>
        </div>
      </router-link>
    </ul>
    <a class="item-all" href="">查看更多产品</a>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height .8rem
    background-color #eee
    margin-top .2rem
    text-indent .2rem
  .item-all
    text-decoration none
    display block
    text-align center
    padding .2rem 0
    color #00afc7
  .item
    display flex
    height 1.9rem
  .border-bottom
    border-bottom 1px solid #eee
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      min-width 0
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        background #ff9300
        line-height .44rem
        padding 0 .2rem
        border-radius .06rem
        display inline-block
        border 0
        margin-top .2rem
        color #fff
        text-decoration none
</style>
