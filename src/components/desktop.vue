<template>
  <div class="desktop">
    <item-wx></item-wx>
    <item-qqmusic></item-qqmusic>
    <item-beiwanglu></item-beiwanglu>
    <item-clock></item-clock>
    <item-jisuanji></item-jisuanji>
    <item-notes></item-notes>
    <item-rili></item-rili>
    <item-shipin></item-shipin>
    <item-tianqi></item-tianqi>
    <item-tixing></item-tixing>
    <item-tongxunlu></item-tongxunlu>
    <item-wenjianjia></item-wenjianjia>
    <item-xiangji></item-xiangji>
    <item-shangdian></item-shangdian>
  </div>
</template>

<script>
import ItemWx from './items/item-wx'
import ItemQqmusic from './items/item-qqmusic'
import ItemBeiwanglu from './items/item-beiwanglu'
import ItemClock from './items/item-clock'
import ItemJisuanji from './items/item-jisuanji'
import ItemNotes from './items/item-notes'
import ItemRili from './items/item-rili'
import ItemShipin from './items/item-shipin'
import ItemTianqi from './items/item-tianqi'
import ItemTixing from './items/item-tixing'
import ItemTongxunlu from './items/item-tongxunlu'
import ItemWenjianjia from './items/item-wenjianjia'
import ItemXiangji from './items/item-xiangji'
import ItemShangdian from './items/item.shangdian'
export default {
  name: 'desktop',
  components: {
    ItemWx,
    ItemQqmusic,
    ItemBeiwanglu,
    ItemClock,
    ItemJisuanji,
    ItemNotes,
    ItemRili,
    ItemShipin,
    ItemTianqi,
    ItemTixing,
    ItemTongxunlu,
    ItemWenjianjia,
    ItemXiangji,
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
