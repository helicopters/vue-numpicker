import Vue from 'vue'
import wcNumpicker from './wcNumpicker'

export default {
	install (Vue) {
		Vue.component('wcNumpicker', Vue.extend(wcNumpicker));
	}
}