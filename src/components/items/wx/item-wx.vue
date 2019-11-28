<template>
  <div class="item item-wx">
    <svg class="icon icon-weixin" aria-hidden="true" @click="changeVisible">
      <use xlink:href="#icon-liaotian" />
    </svg>
    <div class="item-name">微信</div>
    <interface-wx></interface-wx>
  </div>
</template>

<script>
import InterfaceWx from './interface-wx'
export default {
  name: 'item-wx',
  components: {
    InterfaceWx
  },
  data() {
    return {
      name: '微信'
    }
  },
  methods: {
    changeVisible() {
      this.$store.commit('changeInterfaceWxVisible')
      this.$store.commit('changeTaskWxVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
