<template>
  <svg class="icon shangdian task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-shangdian" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_shop_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceShopVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
