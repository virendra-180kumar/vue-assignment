<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script>

export default { 
	data : function(){
		return {
			copyright : "Copy Right @xyz"
		}
	}
}
</script>
<style scoped>
	footer{
		background-color: #222;
		padding: 10px;
	}
	p{
		text-align: center;
		color: lightgreen;
	}
</style>