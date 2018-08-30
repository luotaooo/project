<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <a class="item-button" :href="item.url">查看详情</a>
        </div>
      </li>
    </ul>
    <a class="item-all" href="">查看更多产品</a>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
          title: '武隆天坑地缝国家地质公园',
          desc: '武隆天坑地缝国家地质公园',
          url: 'www.baidu.com'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_200x200_e14826a1.jpg',
          title: '重庆海昌加勒比海水世界',
          desc: '重庆海昌加勒比海水世界',
          url: 'www.baidu.com'
        }
      ]
    }
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
