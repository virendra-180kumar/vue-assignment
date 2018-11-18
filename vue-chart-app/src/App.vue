<template>
  <div>
    <bitcoin-chart></bitcoin-chart>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'

export default {
  components : {
    'bitcoin-chart' : Chart
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
