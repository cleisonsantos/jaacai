import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://jaacai.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})