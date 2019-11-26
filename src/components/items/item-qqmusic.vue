<template>
  <div class="item item-qqnusic">
    <svg class="icon icon-qqmusic" aria-hidden="true" @click="dialogVisible = true">
      <use xlink:href="#icon-QQyinle" />
    </svg >
    <div class="item-name">音乐</div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :fullscreen="false"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <span>这是QQ音乐应用</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
// .icon-qqmusic {
//   font-size: 80px;
// }
</style>
