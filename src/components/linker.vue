<template>
  <a v-if="isWx" :href="'/pages' + href + '/main'">{{text}}</a>
  <router-link v-else :to="href">{{text}}</router-link>
</template>

<script>
export default {
  props: ['text', 'href'],
  data () {
    return {
      isWx: process.env.PLATFORM !== 'web'
    }
  }
}
</script>
