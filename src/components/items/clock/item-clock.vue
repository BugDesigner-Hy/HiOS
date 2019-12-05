<template>
  <div class="item item-clock">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-shizhong" />
    </svg>
    <div class="item-name">时钟</div>
    <interface-clock></interface-clock>
  </div>
</template>

<script>
import InterfaceClock from './interface-clock'
export default {
  name: 'item-clock',
  components: {
    InterfaceClock
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceClockVisible')
      this.$store.commit('changeTaskClockVisible')
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
