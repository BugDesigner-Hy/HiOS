<template>
  <div class="task-sound">
    <div class="sound-progress" v-show="visible">
      <el-slider v-model="value" vertical height="150px"></el-slider>
    </div>
    <div class="sound-icon" @click="changeVisible">
      <i class="iconfont icon-yinliang"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 20,
      visible: false
    }
  },
  methods: {
    changeVisible () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.task-sound {
  position: absolute;
  width: 40px;
  right: 70px;
  bottom: 0;
  height: 200px;
  .sound-progress {
    position: absolute;
    bottom: 40px;
    width: 40px;
    height: 160px;
    .el-slider {
      border: 1px solid #fff;
      border-radius: 5%;
    }
  }
  .sound-icon {
    position: absolute;
    bottom: 0px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>
