<template>
  <div class="item icon-shipin">
    <svg class="icon" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-shipin" />
    </svg>
    <div class="item-name">视频</div>
    <interface-video></interface-video>
  </div>
</template>

<script>
import InterfaceVideo from './interface-shipin'
export default {
  name: 'item-video',
  components: {
    InterfaceVideo
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceShipinVisible')
      this.$store.commit('changeTaskShipinVisible')
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
