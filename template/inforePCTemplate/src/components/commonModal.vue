<template>
    <a-modal
      :title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: [ 'Title', 'ModalText' ],
  setup(props, { emit }) {
    const visible = ref(false)
    const showModal = () => {
      visible.value = true
    }
    const handleOk = () => {
      emit('modalConfirm')
      visible.value = false
    }
    const handleCancel = () => {
      visible.value = false
    }
    return {
      visible,
      confirmLoading: false,
      showModal,
      handleOk,
      handleCancel
    }
  }
})
</script>