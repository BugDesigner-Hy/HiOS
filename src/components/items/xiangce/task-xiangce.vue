<template>
  <!-- <div class="task-item task-wx"> -->
  <svg class="icon icon-xiangji task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-xiangji" />
  </svg>
  <!-- </div> -->
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_xiangce_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceXiangceVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
