<template>
  <div>
    <city-header></city-header>
    <city-search :city="cityList"></city-search>
    <city-list :list="cityList" :hot="hotCity" :letter="letter"></city-list>
    <city-alphabet :city="cityList" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCity: [],
      cityList: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cityList = data.cities
        this.hotCity = data.hotCities
      }
    },
    handleChange (sa) {
      this.letter = sa
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
