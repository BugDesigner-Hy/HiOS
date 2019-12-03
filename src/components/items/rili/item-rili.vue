<template>
  <div class="item icon-rili">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-rili" />
    </svg>
    <div class="item-name">日历</div>
    <interface-rili></interface-rili>
  </div>
</template>

<script>
import InterfaceRili from './interface-rili'
export default {
  name: 'item-rili',
  components: {
    InterfaceRili
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceRiliVisible')
      this.$store.commit('changeTaskRiliVisible')
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
