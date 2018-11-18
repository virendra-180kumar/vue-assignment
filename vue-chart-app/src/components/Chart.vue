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
	props : {
		chartOptions :{   //chartoptions to plot highcharts
			type : Object,
			required :true
		}
	},
	data() {
		return {
		}
	  },
	computed : {
		
	}
}
</script>
<style scoped>
	
</style>