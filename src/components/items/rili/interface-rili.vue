<template>
  <div class="rili" v-if="visible" v-drag>
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <el-calendar v-model="value">
      <template slot="dateCell" slot-scope="{date, data}">
        <div :class="[data.isSelected ? 'is-selected' : '']">
          {{ data.day.split('-').slice(2).join('-') }}
          <ul class="tixingList">
            <li
              :class="[item.done?'is-done':'']"
              v-for=" (item,index) in selectedContent(data.day)"
              :key="index"
            >{{item.content}}</li>
          </ul>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      remindList: []
    }
  },
  mounted: function() {
    this.remindList = this.getRemindList()
  },
  computed: {
    visible() {
      return this.$store.state.interface_rili_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceRiliVisible')
      this.$store.commit('changeTaskRiliVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceRiliVisible')
    },
    selectedContent(date) {
      let res
      res = this.remindList.filter(item => {
        if (item.date.indexOf(date) >= 0) {
          return true
        }
        return false
      })
      if (res.length == 0) return ''
      let content = []
      res.forEach(item => content.push(item))
      return content
    },
    getRemindList() {
      // console.log('store.remindlist :', this.$store.state.remindList)
      return this.$store.state.remindList
    }
  }
}
</script>

<style lang="scss" scoped>
.rili {
  width: 60vw;
  //   height: 60vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20xp !important;
  /deep/.el-calendar {
    border-radius: 20xp !important;
    background: linear-gradient(120deg, #ffccbc, #dcedc8);
    // background-color: #fffde7;
  }
  //   /deep/.el-calendar {
  //     width: 80vw;
  //     height: 67vh;
  //     .el-calendar__header {
  //       width: 77vw;
  //       padding-top: 20px;
  //       .el-calendar__button-group {
  //         margin-right: 40px;
  //       }
  //     }
  //     .el-calendar__body {
  //       height: 57vh;
  //       .el-calendar-table {
  //         width: 77vw;
  //         height: 45vh;
  //       }
  //     }
  //   }

  .control {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    .icon {
      font-size: 1em;
      margin: 3px 2px;
      opacity: 0.3;
      transition: 0.5s;
    }
    .icon:hover {
      opacity: 1;
    }
  }
}
.is-selected {
  color: #1989fa;
}
/deep/.el-calendar-day {
  font-size: 0.8em;
  overflow: auto;
}
/deep/.el-calendar-day::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
/deep/.el-calendar-day::-webkit-scrollbar-thumb {
  background-color: rgba(158, 158, 158, 0);
}
.tixingList {
  list-style-type: disc;
  margin: 0;
  margin-left: 13px;
  padding: 0;
  color: #43a047;
  text-align: center;
}
.is-done {
  text-decoration: line-through;
  color: #f44336;
}
</style>
