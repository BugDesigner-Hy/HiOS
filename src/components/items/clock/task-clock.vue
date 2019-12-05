<template>
  <svg class="icon icon-shizhong task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-shizhong" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_clock_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceClockVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
