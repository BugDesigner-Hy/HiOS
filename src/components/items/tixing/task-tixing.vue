<template>
  <!-- <div class="task-item task-wx"> -->
  <svg class="icon icon-tixingshixiang task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-tixingshixiang" />
  </svg>
  <!-- </div> -->
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_tixing_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceTixingVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
