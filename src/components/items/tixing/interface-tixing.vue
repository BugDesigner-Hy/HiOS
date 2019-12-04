<template>
  <div class="tixing" v-if="visible" v-drag>
    <div class="title">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="search">
      <input type="text" name="search" id="search" v-model="search" />
      <span></span>
      <i class="el-icon-search"></i>
    </div>
    <ul class="remindList">
      <li class="item" v-for="(item,index) in remindList" :key="index">
        <div :class="['item-check',{outerdone:item.done}]" @click="()=>changeItemDone(item,index)">
          <div :class="['inner',{innerdone:item.done}]"></div>
        </div>
        <input type="text" v-model="item.content" :class="{linethrough:item.done}" />
        <div class="date">{{item.date}}</div>
        <span></span>
        <i class="el-icon-delete deleteItem" @click="()=>deleteItem(index)"></i>
      </li>
    </ul>

    <svg class="icon icon-zengjia" aria-hidden="true" @click="upAddDiv">
      <use xlink:href="#icon-zengjia" />
    </svg>

    <div :class="['add',{up:isUp}]" ref="addRef">
      <div class="inputWrapper">
        <input
          type="text"
          name="addItem"
          id="addItem"
          v-model="newItemContent"
          @keyup.enter="addItem"
        />
        <div class="addbtn" @click="addItem">
          <i class="el-icon-check"></i>
        </div>
        <div class="downbtn" @click="downAddDiv">
          <i class="el-icon-bottom"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../../plugins/date'
export default {
  data() {
    return {
      isUp: false,
      newItemContent: '',
      search: '',
      remindList: []
    }
  },
  mounted: function() {
    this.remindList = this.getRemindList()
  },
  computed: {
    visible() {
      return this.$store.state.interface_tixing_visible
    }
  },
  watch: {
    search() {
      if (this.search == '') {
        this.remindList = this.getRemindList()
      }
      this.remindList = this.remindList.filter(item => {
        if (item.content.indexOf(this.search) >= 0) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceTixingVisible')
      this.$store.commit('changeTaskTixingVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceTixingVisible')
    },
    upAddDiv() {
      this.isUp = true
    },
    downAddDiv() {
      this.isUp = false
    },
    addItem() {
      let content = this.newItemContent
      let newItem = {
        content: content,
        date: formatDate(new Date()),
        done: false
      }
      this.remindList.push(newItem)
      this.$store.dispatch('updateRemindList', this.remindList)
      this.newItemContent = ''
      this.isUp = false
    },
    changeItemDone(item, index) {
      this.remindList[index].done = !item.done
      this.$store.dispatch('updateRemindList', this.remindList)
    },
    deleteItem(index) {
      this.remindList.splice(index, 1)
      // this.$store.commit('updateRemindList', this.remindList)
      this.$store.dispatch('updateRemindList', this.remindList)
    },
    getRemindList() {
      return this.$store.state.remindList
    }
  }
}
</script>

<style lang="scss" scoped>
.tixing {
  width: 380px;
  height: 54vh;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 0 20px;
  border-radius: 5px;
  resize: both;
}
.title {
  position: absolute;
  top: 0px;
  right: 0px;
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
.search {
  width: 100%;
  height: 50px;
  margin: 30px 0 5px 0;
  position: relative;
  display: flex;
  justify-content: center;
  input {
    width: 90%;
    height: 20px;
    border: none;
    background: none;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    display: block;
    padding-left: 20px;
  }
  span::after {
    content: '';
    position: absolute;
    top: 22px;
    left: 5px;
    width: 0;
    height: 2px;
    background: linear-gradient(120deg, #2979ff, #9c27b0);
    transition: 0.5s linear;
  }
  input:focus + span::after {
    width: 34vh;
  }
  .el-icon-search {
    position: absolute;
    left: 6px;
    top: 0;
    color: #9e9e9e;
    z-index: -1;
    opacity: 0.5;
  }
}
.remindList {
  width: 100%;
  height: 74%;
  overflow: auto;
  // overflow-x: hidden;
  margin: 0;
  padding: 0;
  .item {
    width: 100%;
    height: 68px;
    margin: 5px 0;
    padding: 5px 0;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    padding-left: 15px;
    box-sizing: border-box;
    // border: 1px solid #03A9F4;
    .item-check {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: none;
      display: inline-block;
      margin-right: 10px;
      transition: 0.5s;
      border: 2px solid #9e9e9e;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .inner {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: none;
        transition: 0.5s;
      }
    }
    input {
      width: 80%;
      height: 100%;
      border: none;
      background: none;
      border-bottom: 1px solid #9e9e9e;
      outline: none;
      display: block;
      padding-left: 2px;
      padding-bottom: 7px;
      font-size: 1.4em;
      transition: 0.5s;
      color: #263238;
    }
    span::after {
      content: '';
      position: absolute;
      top: 66px;
      left: 44px;
      width: 0;
      height: 1px;
      background: linear-gradient(120deg, #2979ff, #9c27b0);
      transition: 0.5s linear;
    }
    input:focus {
      padding-bottom: 0px;
      font-size: 1.5em;
    }
    // input:focus ~ span::after {
    //   width: 260px;
    //   top: 62px;
    // }

    .deleteItem {
      position: absolute;
      right: 35px;
      bottom: 3px;
      transition: 0.5s;
      text-align: center;
      color: rgb(231, 46, 46);
      line-height: 6vh;
      cursor: pointer;
      opacity: 0;
    }
    input:focus ~ .deleteItem {
      opacity: 1;
    }
    .date {
      position: absolute;
      width: 70%;
      height: 16px;
      line-height: 16px;
      left: 45px;
      bottom: 6px;
      color: grey;
      font-size: 0.5em;
      transition: 0.5s;
    }
    input:focus ~ .date {
      opacity: 0;
    }
  }
}
.remindList::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
// .remindList::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 6px rgb(143, 136, 136);
//   border-radius: 20px;
//   background-color: rgba(255, 255, 255, 1);
// }
.remindList::-webkit-scrollbar-thumb {
  // border-radius: 20px;
  // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(158, 158, 158, 0);
}

.icon-zengjia {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 2em;
}
.icon-zengjia:hover {
  font-size: 2.3em;
}

.add {
  width: 100%;
  height: 0;
  background: linear-gradient(120deg, #2196f3, #f44336);
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  .inputWrapper {
    width: 80%;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 25px;
    position: relative;
    opacity: 0;
    transition: 0.2s;
    input {
      width: 100%;
      height: 50px;
      background-color: #fff;
      font-size: 1.5em;
      border: none;
      outline: none;
      border-radius: 25px;
      position: relative;
      box-sizing: border-box;
      padding-left: 55px;
    }
    .addbtn {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(120deg, #2979ff, #f44336);
      position: absolute;
      bottom: 4px;
      right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      i {
        font-size: 1.5em;
        color: #f5f5f5;
      }
    }
    .addbtn:hover {
      opacity: 0.8;
      right: 5px;
    }
    .downbtn {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(120deg, #2979ff, #f44336);
      position: absolute;
      bottom: 4px;
      left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      i {
        font-size: 1.5em;
        color: #f5f5f5;
      }
    }
    .downbtn:hover {
      opacity: 0.8;
      bottom: 2px;
    }
  }
}
.up {
  height: 300px;
  .inputWrapper {
    opacity: 1;
  }
}
.outerdone {
  border: 2px solid #448aff !important;
}
.innerdone {
  background-color: #448aff;
}
.linethrough {
  text-decoration: line-through;
}
</style>
