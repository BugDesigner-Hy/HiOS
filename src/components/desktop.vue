<template>
  <div class="desktop">
    <item-wx></item-wx>
    <item-qqmusic></item-qqmusic>
    <item-clock></item-clock>
    <item-jisuanji></item-jisuanji>
    <item-rili></item-rili>
    <item-shipin></item-shipin>
    <item-tianqi></item-tianqi>
    <item-tixing></item-tixing>
    <item-wenjianjia></item-wenjianjia>
    <item-xiangce></item-xiangce>
    <item-shangdian></item-shangdian>
  </div>
</template>

<script>
import ItemWx from './items/wx/item-wx'
import ItemQqmusic from './items/qqmusic/item-qqmusic'
import ItemClock from './items/clock/item-clock'
import ItemJisuanji from './items/jisuanji/item-jisuanji'
import ItemRili from './items/rili/item-rili'
import ItemShipin from './items/shipin/item-shipin'
import ItemTianqi from './items/tianqi/item-tianqi'
import ItemTixing from './items/tixing/item-tixing'
import ItemWenjianjia from './items/wenjianjia/item-wenjianjia'
import ItemXiangce from './items/xiangce/item-xiangce'
import ItemShangdian from './items/shangdian/item-shangdian'
export default {
  name: 'desktop',
  components: {
    ItemWx,
    ItemQqmusic,
    ItemClock,
    ItemJisuanji,
    ItemRili,
    ItemShipin,
    ItemTianqi,
    ItemTixing,
    ItemWenjianjia,
    ItemXiangce,
    ItemShangdian
  }
}
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
