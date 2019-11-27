<template>
  <div class="item item-wx">
    <svg class="icon icon-weixin" aria-hidden="true" @click="interfaceVisible = !interfaceVisible">
      <use xlink:href="#icon-liaotian" />
    </svg>

    <div class="item-name">微信</div>
    <interface :visible="interfaceVisible">
      <template v-slot:title>
        <span class="interfacr-title">{{name}}</span>
      </template>
      <template v-slot:main>
        <div class="interface-main">Here might be a page main</div>
      </template>
    </interface>
  </div>
</template>

<script>
import Interface from './components/interface'
export default {
  name: 'item-wx',
  components: {
    Interface
  },
  data () {
    return {
      name: '微信',
      interfaceVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.interfacr-title{
  position: absolute;
  left: 10px;
}
.interface-main{
  width: 100%;
  height: 100%!important;
  text-align: center;
}

</style>
