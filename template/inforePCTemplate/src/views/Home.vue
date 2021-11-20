<template>
  <div class="r-root">
    <HeaderMenu></HeaderMenu>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component id="crouter" :is="Component"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component id="crouter" :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HeaderMenu
  }
})
</script>
<style lang="less" scoped>
.r-root{
  background: #0078FF;
  height: 100%;
  display: flex;
  flex-direction: column;
  #crouter{
    flex: 1;
  }
}
</style>
