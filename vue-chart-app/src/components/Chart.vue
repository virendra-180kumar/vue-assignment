<template>
	<div>
		<highcharts :options="chartOptions"></highcharts>
	</div>
</template>

<script>
import {Chart} from 'highcharts-vue' //importing chart component from highchart-vue

export default {
	componets : {
		'highcharts' : Chart
	},
	data() {
		return {
			data : []
		}
	  },
	created : function(){
		this.$http.get('https://api.pro.coinbase.com/products/BTC-USD/trades').then(function(data){
				this.data = data.data;
		})
	},
	computed : {
		chartSellData(){
			let sellData= [];
			this.data.map((cValue,index) =>{
				if(this.data[index].side==="sell"){
					sellData.push(this.data[index].price)
				}
			});
			return sellData
		},
		chartBuyData(){
			let buyData= [];
			this.data.map((cValue,index)=>{
				if(this.data[index].side==="buy"){
					buyData.push(this.data[index].price)
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
		          text: 'Entire title'
		        },
		        series: [{
		          name : "Sell",
		          data :  this.chartSellData
		        },{
		        	name : "buy",
		        	data :this.chartBuyData
		        }]
		      }
		    
		}
	}
}
</script>
<style scoped>
	
</style>