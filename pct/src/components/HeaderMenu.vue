<!--
 * @Description:
 * @Autor: sj
 * @Date: 2021-11-17 09:08:49
 * @LastEditors: sj
 * @LastEditTime: 2021-11-17 15:48:34
-->
<template>
    <div class="r-header">
      头部
    </div>
    <CommonModal ref="outRef" @modalConfirm="modalConfirm" Title="提示" ModalText="确认退出登录？"></CommonModal>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CommonModal from '@/components/commonModal.vue'
export default defineComponent({
  components: {
    CommonModal
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
</style>