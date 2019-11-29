<template>
  <div class="item item-qqnusic">
    <svg class="icon icon-bofangji" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-bofangji" />
    </svg>
    <div class="item-name">音乐</div>
    <interface-music></interface-music>
  </div>
</template>

<script>
import InterfaceMusic from './interface-qqmusic'
export default {
  name: 'item-music',
  components: {
    InterfaceMusic
  },
  data() {
    return {}
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceQQmusicVisible')
      this.$store.commit('changeTaskQQmusicVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// .icon-qqmusic {
//   font-size: 80px;
// }
</style>
