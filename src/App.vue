<style>
	
</style>
<template>
	<div class="container">
		<wc-numpicker v-model="num" :max="20" :min="1"/>
	</div>
</template>
<script>
	export default {
		name: 'App',
		data () {
			return {
				num: 5
			}
		}
	}
</script>