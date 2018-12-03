<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :ref="item" :key="item.id" @click="handleClick" @touchstart="handleTouch" @touchmove="handleMove" @touchend="handleEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    city: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouch () {
      this.touchStatus = true
    },
    handleMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 80
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
