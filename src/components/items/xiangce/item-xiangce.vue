<template>
  <div class="item icon-xiangji">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-xiangji" />
    </svg>
    <div class="item-name">相册</div>
    <interface-xiangce></interface-xiangce>
  </div>
</template>

<script>
import InterfaceXiangce from './interface-xiangce'
export default {
  name: 'item-xiangce',
  components: {
    InterfaceXiangce
  },
  data() {
    return {
      name: '相册'
    }
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceXiangceVisible')
      this.$store.commit('changeTaskXiangceVisible')
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
