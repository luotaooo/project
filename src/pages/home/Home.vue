<template>
  <div>
    <home-header></home-header>
    <div class="poo" ref="wrapper">
      <div>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :icon="iconsList"></home-icons>
        <home-recommend :list="recommend"></home-recommend>
        <home-hotlist :list="hotList"></home-hotlist>
        <home-footer></home-footer>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeHotlist from './components/Hotlist'
import HomeFooter from './components/Footer'
import axios from 'axios'
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeHotlist,
    HomeFooter
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommend: [],
      hotList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('./api/index.json?city' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.recommend = data.recommendList
        this.hotList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/common.styl"
  .poo
    position absolute
    top .86rem
    bottom 0
    left 0
    right 0
    overflow hidden
</style>
