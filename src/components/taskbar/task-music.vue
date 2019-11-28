<template>
  <!-- <div class="task-item task-wx"> -->
  <svg class="icon icon-qqmusic task-item" aria-hidden="true" v-if="visible" @click="showInterface">
    <use xlink:href="#icon-QQyinle" />
  </svg>
  <!-- </div> -->
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.task_qqmusic_visible
    }
  },
  methods: {
    showInterface() {
      this.$store.commit('changeInterfaceQQmusicVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .task-item{
//     left: 10px;
// }
</style>
