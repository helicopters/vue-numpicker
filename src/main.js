import Vue from 'vue'
import App from './App'

import wcNumpicker from './wc-numpicker'
Vue.use(wcNumpicker);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
