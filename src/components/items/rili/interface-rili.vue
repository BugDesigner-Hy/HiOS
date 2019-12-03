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
        <p
          :class="data.isSelected ? 'is-selected' : ''"
        >{{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
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
    background: linear-gradient(120deg,#ffccbc,#dcedc8);
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
</style>
