<template>
  <div class="item icon-jisuanji">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-jisuanji" />
    </svg>
    <div class="item-name">计算器</div>
    <interface-jisuanqi></interface-jisuanqi>
  </div>
</template>

<script>
import InterfaceJisuanqi from './interface-jisuanqi'
export default {
  name: 'item-jisuanqi',
  components: {
    InterfaceJisuanqi
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceJisuanqiVisible')
      this.$store.commit('changeTaskJisuanqiVisible')
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
