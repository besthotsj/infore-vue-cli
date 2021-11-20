/*
 * @Description:
 * @Autor: sj
 * @Date: 2021-11-17 09:08:49
 * @LastEditors: sj
 * @LastEditTime: 2021-11-17 15:32:21
 */
import { createApp, App } from 'vue'
import AppComp from './App.vue'
import './registerServiceWorker'
import router from './router'
import { setupStore } from './store'
import 'ant-design-vue/dist/antd.css'
import { registerGlobComp } from '@/components/AntdComponent'
//引入rem等比适配
// UI框架部分组件使用JavaScript将css作为内联样式直接写在html标签内，
// 打包适配时不会读取相关css,所以要配置相关样式，
// 在style中需要" !important "进行样式覆盖。
import './utils/rem'

let instance: App
function render(params?: Record<string, unknown>) {
  instance = createApp(AppComp)
  registerGlobComp(instance)
  setupStore(instance)
  if (params) {
    instance.config.globalProperties.$parentData = params
  }
  instance
    .use(router)
    .mount('#app')
}
render()
