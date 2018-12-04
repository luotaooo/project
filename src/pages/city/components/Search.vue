<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item" v-show="hasNodata">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BsScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.city) {
          this.city[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BsScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      border 0
      color #666
      padding 0 .1rem
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #eee
    .search-item
      line-height .52rem
      padding .1rem
      background #ffffff
      color #666
      border-bottom 1px #eee solid
</style>
