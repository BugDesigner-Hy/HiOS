<template>
  <div class="item icon-tixingshixiang">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-tixingshixiang" />
    </svg>
    <div class="item-name">提醒事项</div>
    <interface-tixing></interface-tixing>
  </div>
</template>

<script>
import InterfaceTixing from './interface-tixing'
export default {
  name: 'item-tixing',
  components: {
    InterfaceTixing
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceTixingVisible')
      this.$store.commit('changeTaskTixingVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .icon-weixin {
//   font-size: 80px;
// //   color: #1aad19;
// }
</style>
