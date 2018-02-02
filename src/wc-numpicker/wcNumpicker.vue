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
		height: 100%;
		width: 25px;
		background: #f7f7f7;
		fill: #3a3a3a;
	}
	.disabled {
		fill: #bbb;
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
			<svg @click="minus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1602" xmlns:xlink="http://www.w3.org/1999/xlink" class="minus" :class="{'disabled': minusDisabled || disabled}">
				<path d="M801.171 547.589H222.83c-17.673 0-32-14.327-32-32s14.327-32 32-32h578.341c17.673 0 32 14.327 32 32s-14.327 32-32 32z" p-id="1603">
				</path>
			</svg>
			<!-- 数字 -->
			<div class="num">{{value}}</div>
			<!-- + -->
			<svg @click="add" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1731" xmlns:xlink="http://www.w3.org/1999/xlink" class="add" :class="{'disabled': addDisabled || disabled}">
				<path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" p-id="1732">
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
				default: 100,
				type: Number
			},
			min: {
				default: 0,
				type: Number
			},
			disabled: {
				default: false
			}
		},
		data () {
			return {
				/* 增加按钮是否可用 */
				addDisabled: false,
				/* 减少按钮是否可用 */
				minusDisabled: false
			}
		},
		watch: {
			/* 监听 value 以配合样式 */
			value (n) {
				this.addDisabled = (n < this.max) ? false : true;
				this.minusDisabled = (n > this.min) ? false : true;
			}
		},
		mounted () {
			if (this.value > this.max || this.value < this.min) {
				throw new Error ('Error value')
			}

			/* 初始化的时候同样要监听 value 配合样式 */
			this.addDisabled = (this.value < this.max) ? false : true;
			this.minusDisabled = (this.value > this.min) ? false : true;
		},
		methods: {
			/* 降低 */
			minus () {
				/* 如果用户没有禁用, 并且当前值是大于最小值, 那么就允许*/
				!this.disabled 
				&& this.value > this.min 
				&& (()=>{
					let v = this.value;
					this.$emit('input', --v);					
				})();

			},
			/* 增加 */
			add () {

				!this.disabled 
				&& this.value < this.max 
				&& (()=>{
					let v = this.value;
					this.$emit('input', ++v);					
				})();

			}
		}
	}
</script>