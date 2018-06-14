<template>
  <div v-show="visible" class="toast">
    <div class="toast__content">
      <div class="toast__title">{{title}}</div>
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
    visible: {
      type: Boolean,
      default: false
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
  .toast {
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
  .toast__content {
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(0,0,0,.6);
  }
  .toast__title {
    color: #fff;
  }
</style>


