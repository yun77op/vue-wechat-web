<template>
  <div class="switch" ref="body" @click="onClick" v-bind:class="{'is-checked': checked}">
    <div class="switch__core" ref="core"></div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'green'
    }
  },
  methods: {
    onClick() {
      const checked = this.checked

      this.$emit('update:checked', !checked)
      this.$emit('change', !checked)

      this.$refs.body.style.backgroundColor = !checked ? this.color : '#fff'
      this.$refs.body.style.borderColor = !checked ? this.color : '#eee'
      this.$refs.core.style.borderColor = !checked ? this.color : '#eee'
    }
  }
}
</script>

<style>
  .switch {
    border-radius: 20px;
    width: 100px;
    background: #fff;
    height: 40px;
    border: 1px solid #eee;
    position: relative;
  }
  .switch__core {
    background: #fff;
    position: absolute;
    height: 40px;
    width: 40px;
    border: 1px solid #eee;
    left: -1px;
    top: -1px;
    border-radius: 50%;
    transition-delay: 0ms;
    transition-duration: 200ms;
    transition-property: left;
  }
  .switch.is-checked .switch__core {
    left: 59px;
  }
</style>
