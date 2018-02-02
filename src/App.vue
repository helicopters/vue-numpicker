<style>
	
</style>
<template>
	<div class="container">
		<wc-numpicker v-model="num" :max="10" :min="1" :disabled="false"/>

		<wc-numpicker v-model="num2" :max="20" :min="-2" :disabled="false"/>

		<wc-numpicker v-model="num2" :max="20" :min="-2" :disabled="true"/>
	</div>
</template>
<script>
	export default {
		name: 'App',
		data () {
			return {
				num: 6,
				num2: 10
			}
		}
	}
</script>