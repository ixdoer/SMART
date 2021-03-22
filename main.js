import Vue from 'vue'
import App from './App'
// 引入自定义函数
import globalVar from '@/myjs/globalVar.js'
Vue.config.productionTip = false
//挂载到全局
Vue.prototype.globalVar = globalVar

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
