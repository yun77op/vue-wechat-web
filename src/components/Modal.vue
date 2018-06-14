<template>
  <div v-show="visible" class="modal">
    <div class="modal__content">
      <div class="modal__title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 1500
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
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  watch: {
    visible(value) {
      if (value) {
        setTimeout(() => {
          this.$emit('update:visible', false)
        }, this.duration)
      }
    }
  },
  data() {
    return {

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
  }
  .modal__content {
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(0,0,0,.6);
  }
  .modal__title {
    color: #fff;
  }
</style>


