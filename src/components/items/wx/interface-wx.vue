<template>
  <div class="interface" v-if="visible" v-drag>
    <div class="interface-title">
      <div class="item-name">微信</div>
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-zengjia" aria-hidden="true">
        <use xlink:href="#icon-zengjia" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="interface-main">Here might be a page main</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    visible() {
      return this.$store.state.interface_wx_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceWxVisible')
      this.$store.commit('changeTaskWxVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceWxVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
.interface {
  width: 70vh;
  height: 45vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 1.5%;
  .interface-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    background-color: skyblue;
    border-top-left-radius: 2%;
    border-top-right-radius: 25%;
    text-align: center;
    color: #4f5153;
    letter-spacing: 2px;
    .icon {
      font-size: 1.3em;
      padding-right: 5px;
    }
    .icon:hover {
      font-size: 1.6em;
    }
    .item-name {
      position: absolute;
      left: 10px;
    }
  }
  .interface-main {
    position: relative;
    height: 90%;
    width: 100%;
    text-align: center;
  }
}
</style>
