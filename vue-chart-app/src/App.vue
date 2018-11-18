<template>
  <div>
    <app-header></app-header>
    <bitcoin-chart v-bind:chartOptions="chartOptions"></bitcoin-chart> 
    <app-footer></app-footer>
    <!-- passing charts options to chart components  -->
  </div>
</template>

<script>
import Chart from './components/Chart.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components : {
    'bitcoin-chart' : Chart,
    'app-header' : Header,
    'app-footer' : Footer,
  },
  data() {
    return {
      data: []
    }
  },
  created(){
    this.$http.get('https://api.pro.coinbase.com/products/BTC-USD/trades').then(function(data){
        this.data = data.data;
    })
  },
  computed : {
    sellData(){
      let sellData= [];
      this.data.map((cValue,index) =>{
        if(this.data[index].side==="sell"){
          sellData.push(+this.data[index].price)
        }
      });
      return sellData
    },
    buyData(){
      let buyData= [];
      this.data.map((cValue,index)=>{
        if(this.data[index].side==="buy"){
          buyData.push(+this.data[index].price)
        }
      });
      return buyData
    },
    chartOptions(){
      return {
            chart: {
              type: 'line'
            },
            title: {
              text: 'Bit Coin'
            },
            series: [{
              name : "Sell",
              data :  this.sellData
            },
            {
              name : "Buy",
              data :this.buyData
            }]
          }
        
    }
  }
}
</script>

<style>

</style>
