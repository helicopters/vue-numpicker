<style scoped lang="less">
.wc-numpicker-container {
	display: inline-block;

	border: 1px solid #e2e2e2;

	border-radius: 4px;

	.wc-numpicker__inner {
		display: flex;

		height: 25px;
		align-items: center;

	}

	svg {
		// height: 20px;
		height: 100%;
		width: 25px;
		background: #f7f7f7;
		padding: 4px;
		// display: block;
	}
	

	.num {
		font-size: 15px;
		width: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
<template>
	<div class="wc-numpicker-container clearfix">
		<div class="wc-numpicker__inner">

			<!-- - -->
			<svg @click="minus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1602" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128">
				<path fill="#bbb" d="M801.171 547.589H222.83c-17.673 0-32-14.327-32-32s14.327-32 32-32h578.341c17.673 0 32 14.327 32 32s-14.327 32-32 32z" p-id="1603">
					
				</path>
			</svg>

			<div class="num">{{value}}</div>

			<!-- + -->
			<svg @click="add" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1731" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128">
				<path fill="#3a3a3a" d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" p-id="1732">
					
				</path>
			</svg>	


		
		</div>
	</div>
</template>
<script>
	export default {
		name: 'wcNumpicker',
		props: {
			value: {
				default: 1,
				type: Number
			},
			max: {
				default: 1000,
				type: Number
			},
			min: {
				default: 0,
				type: Number
			}
		},
		methods: {
			/* 降低 */
			minus () {

				if (this.value <= this.min) {
					return;
				}

				let v = this.value;
				this.$emit('input', --v);
			},
			/* 增加 */
			add () {

				if (this.value >= this.max) {
					return;
				}

				let v = this.value;
				this.$emit('input', ++v);
			}
		}
	}
</script>