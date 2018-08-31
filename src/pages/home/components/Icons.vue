<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icon: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icon.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
    bottom 0
  .icons >>> .swiper-pagination-bullet
    width .12rem
    height .12rem
  .icons
    margin-top: .1rem
    .icon
      float: left;
      width: 25%;
      height: 1.5rem;
      padding-top: .2rem;
      text-align: center;
      .icon-img
        display inline-block
        width 1.1rem
        height 1.1rem
        .icon-img-content
          background 0
          height: 1.1rem;
          width: 1.1rem;
      .icon-desc
        margin-top: .1rem;
        font-size: .28rem;
        color: $darkTextColor
        ellipsis()
</style>
