<template>
  <svg class="icon icon-shipin task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-shipin" />
  </svg>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_shipin_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceShipinVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
