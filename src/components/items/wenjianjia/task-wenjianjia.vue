<template>
  <svg class="icon icon-wenjianjia task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-wenjianjia" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_wenjianjia_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceWenjianjiaVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
