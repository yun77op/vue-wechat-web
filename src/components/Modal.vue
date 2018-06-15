<template>
  <div v-show="visible" class="modal">
    <div class="modal__body">
      <div class="modal__title">{{title}}</div>
      <div class="modal__content">{{content}}</div>
      <div class="modal__button-container">
        <button class="modal__button modal__button--cancel" type="button" @click="onCancel" v-if="showCancel">{{cancelText}}</button>
        <button class="modal__button" type="button" @click="onConfirm">{{confirmText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onConfirm() {
      if (typeof this.success === 'function') {
        this.success()
      }
      this.close()
    },
    onCancel() {
      this.close()
    },
    close() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped>
  .modal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.6);
  }
  .modal__body {
    background: #fff;
    width: 70vw;
  }
  .modal__title {
    color: #000;
    padding: 10px 0;
    text-align: center;
  }
  .modal__content {
    color: #999;
    text-align: center;
  }
  .modal__button-container {
    border-top: 1px solid #999;
    display: flex;
    margin-top: 20px;
  }
  .modal__button {
    text-align: center;
    flex-grow: 1;
    color: #000;
    padding: 10px 0;
    border: none;
    background: #fff;
  }
  .modal__button--cancel {
    border-right: 1px solid #999;
  }
</style>


