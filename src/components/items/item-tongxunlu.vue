<template>
  <div class="item icon-tongxunlu">
    <svg class="icon" aria-hidden="true"  @click="dialogVisible = true">
      <use xlink:href="#icon-tongxunlu" />
    </svg>
    <div class="item-name">通讯录</div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :fullscreen="false"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <span>这是通讯录应用</span>
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
// .icon-weixin {
//   font-size: 80px;
// //   color: #1aad19;
// }
</style>
