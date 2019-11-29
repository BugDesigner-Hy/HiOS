<template>
  <svg class="icon icon-weixin task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-liaotian" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_wx_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceWxVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
