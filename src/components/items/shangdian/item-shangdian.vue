<template>
  <div class="item icon-shangdian">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-shangdian" />
    </svg>
    <div class="item-name">商店</div>
    <interface-shop></interface-shop>
  </div>
</template>

<script>
import InterfaceShop from './interface-shangdian'
export default {
  name: 'item-shop',
  components: {
    InterfaceShop
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceShopVisible')
      this.$store.commit('changeTaskShopVisible')
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
