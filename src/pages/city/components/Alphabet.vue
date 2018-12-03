<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    width .44rem
    .item
      color $bgColor
      text-align  center
      line-height .4rem
</style>
