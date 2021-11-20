<template>
  <div id="nav">
    <router-link to="/"></router-link>
  </div>
  <ConfigProvider :locale="locale">
      <router-view />
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  components: {
    ConfigProvider
  },
  setup () {
    return {
      locale: zhCN
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body, html{
  min-width: 800Px;
  margin: 0px;
  padding: 0px;
  height: 100%;
}
::v-deep(.ant-btn-primary){
  border-radius: 8px;
}
</style>
