<template>
  <div class="item icon-tianqi">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-tianqi" />
    </svg>
    <div class="item-name">天气</div>
    <interface-tianqi></interface-tianqi>
  </div>
</template>

<script>
import InterfaceTianqi from './interface-tianqi'
export default {
  name: 'item-tianqi',
  components: {
    InterfaceTianqi
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceTianqiVisible')
      this.$store.commit('changeTaskTianqiVisible')
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
