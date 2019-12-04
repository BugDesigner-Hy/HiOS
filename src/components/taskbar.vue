<template>
  <div class="taskbar">
    <div class="windows" @click="changeTaskCascaderVisible">
      <i class="iconfont icon-windows"></i>
    </div>
    <div class="time">{{currentTime.hh}}:{{currentTime.mm}}</div>
    <task-cascader :visible="taskCascaderVisible"></task-cascader>
    <task-sound></task-sound>
    <div class="task-content">
      <task-wx></task-wx>
      <task-music></task-music>
      <task-tixing></task-tixing>
      <task-xiangce></task-xiangce>
      <task-rili></task-rili>
      <task-tianqi></task-tianqi>
    </div>
  </div>
</template>

<script>
import TaskCascader from './taskbar/task-cascader'
import TaskSound from './taskbar/task-sound'
import TaskWx from './items/wx/task-wx'
import TaskMusic from './items/qqmusic/task-music'
import TaskTixing from './items/tixing/task-tixing'
import TaskXiangce from './items/xiangce/task-xiangce'
import TaskRili from './items/rili/task-rili'
import TaskTianqi from './items/tianqi/task-tianqi';
export default {
  name: 'desktop',
  components: {
    TaskCascader,
    TaskSound,
    TaskWx,
    TaskMusic,
    TaskTixing,
    TaskXiangce,
    TaskRili,
    TaskTianqi
  },
  data() {
    return {
      currentTime: {
        hh: '',
        mm: ''
      },
      taskCascaderVisible: false
    }
  },
  mounted() {
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      let date = new Date()
      this.currentTime.hh = String(date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
      this.currentTime.mm = String(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    },
    changeTaskCascaderVisible() {
      this.taskCascaderVisible = !this.taskCascaderVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.taskbar {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: #77baf1;
  opacity: 0.5;
}
.windows {
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aliceblue;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgb(41, 108, 233);
  z-index: 999;
  .icon-windows {
    line-height: 50px;
    font-size: 2.3em;
  }
}
.time {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 50px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.task-content {
  display: flex;
  justify-content: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 40px;
  left: 70px;
  // background-color: #eee;
}
</style>
