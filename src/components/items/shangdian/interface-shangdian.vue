<template>
  <div class="shop middle" v-if="visible" v-drag>
    <div class="header">
      <div
        :class="['item' ,shop.isActive?'active':'']"
        v-for="(shop, index) in shops"
        :key="index"
        @click="()=>changeshop(shop)"
      >{{shop.name}}</div>
    </div>
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <iframe class="jd" ref="iframeRef" src="https://www.jd.com/"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [
        {
          name: '京东商城',
          src: 'https://www.jd.com/',
          isActive: true
        },
        {
          name: '淘宝',
          src: 'https://www.taobao.com/',
          isActive: false
        },
        {
          name: '当当网',
          src: 'http://book.dangdang.com/',
          isActive: false
        },
        {
          name: '苏宁易购',
          src: 'https://www.suning.com/',
          isActive: false
        }
      ]
    }
  },
  computed: {
    visible() {
      return this.$store.state.interface_shop_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceShopVisible')
      this.$store.commit('changeTaskShopVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceShopVisible')
    },
    changeshop(shop) {
      this.shops.forEach(shop => (shop.isActive = false))
      shop.isActive = true
      this.$refs.iframeRef.src = shop.src
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  width: 1100px;
  height: 850px;
  .header {
    width: 1105px;
    height: 30px;
    background-color: #fff;
    color: grey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding-left: 10px;
    .item {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .control {
    position: absolute;
    top: 2px;
    right: 0px;
    z-index: 1;
    .icon {
      font-size: 1.3em;
      margin: 3px 2px;
      opacity: 0.3;
      transition: 0.5s;
    }
    .icon:hover {
      opacity: 1;
    }
  }
  .jd {
    width: 100%;
    height: 100%;
  }
  /deep/.jd::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  /deep/.jd::-webkit-scrollbar-thumb {
    background-color: rgba(158, 158, 158, 0);
  }
}
.active {
  color: #d32f2f;
}
</style>
