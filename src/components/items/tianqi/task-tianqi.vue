<template>
  <svg class="icon icon-tianqi task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-tianqi" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_tianqi_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceTianqiVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
