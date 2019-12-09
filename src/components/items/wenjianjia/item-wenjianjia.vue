<template>
  <div class="item icon-wenjianjia">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-wenjianjia" />
    </svg>
    <div class="item-name">文件夹</div>
    <interface-wenjianjia></interface-wenjianjia>
  </div>
</template>

<script>
import InterfaceWenjianjia from './interface-wenjianjia'
export default {
  name: 'item-wenjianjia',
  components: {
    InterfaceWenjianjia
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceWenjianjiaVisible')
      this.$store.commit('changeTaskWenjianjiaVisible')
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
