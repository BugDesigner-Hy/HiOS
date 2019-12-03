<template>
  <!-- <div class="task-item task-wx"> -->
  <svg class="icon icon-rili task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-rili" />
  </svg>
  <!-- </div> -->
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_rili_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceRiliVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
