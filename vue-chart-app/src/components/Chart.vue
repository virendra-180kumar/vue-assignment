<template>
	<div>{{data}}</div>
</template>

<script>
import {bus} from '../main'

export default { 
	data : function(){
		return {
			data : []
		}
	},
	created : function(){
		this.$http.get('https://api.coinmarketcap.com/v2/listings/').then(function(data){
			console.log(data);
			this.data = data;
		})
	}
}
</script>
<style scoped>
	
</style>