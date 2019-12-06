<template>
  <svg class="icon icon-jisuanji task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-jisuanji" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_jisuanqi_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceJisuanqiVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
