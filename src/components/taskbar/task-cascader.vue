<template>
  <div class="task-cascader">
    <el-cascader-panel :options="options" :props="{ expandTrigger: 'hover' }" v-show="visible"></el-cascader-panel>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      options: [
        {
          value: 'wx',
          label: '微信',
          children: [
            {
              value: 'wx-open',
              label: '打开应用'
            },
            {
              value: 'wx-uninstall',
              label: '卸载'
            }
          ]
        },
        {
          value: 'music',
          label: '音乐',
          children: [
            {
              value: 'music-open',
              label: '打开应用'
            },
            {
              value: 'music-uninstall',
              label: '卸载'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.task-cascader {
  position: absolute;
  //   width: 100px;
  //   height: 200px;
  bottom: 40px;
  left: 0;

  .el-cascader-panel {
    background-color: white;
    opacity: 1;
  }
}
</style>
