<template>
  <div class="interface" v-show="interfaceVisible" v-drag>
    <div class="interface-title">
      <slot name="title" class="title">应用标题</slot>
      <svg class="icon icon-weishenhe" aria-hidden="true">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-zengjia" aria-hidden="true">
        <use xlink:href="#icon-zengjia" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="interface-main">
      <slot name="main">应用窗口</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      //   tmpVisible: this.visible
    }
  },
  computed: {
    interfaceVisible: {
      get: function () {
        return this.visible | false
      },
      set: function (value) {
        // this.tmpVisible = value
        // this.visible = value
      }
    }
  },
  methods: {
    close () {
      this.interfaceVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.interface {
  width: 600px;
  height: 400px;
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
  }
  .interface-main {
    position: relative;
    height: 90%;
  }
}
</style>
