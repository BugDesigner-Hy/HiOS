<template>
  <div class="chat middle" v-if="visible">
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="content">
      <ul ref="ulRef">
        <li v-for="(msgObj,index) in msgList" :key="index">
          {{msgObj.name}}:
          <br />
          {{msgObj.msg}}
        </li>
      </ul>
    </div>
    <div class="send">
      <input type="text" v-model="msg" placeholder="从这里开始聊天~" @keyup.enter="sendMsg" />
      <el-button class="send-btn" type="primary" plain @click="sendMsg">send</el-button>
    </div>
  </div>
</template>

<script>
import socketio from 'socket.io-client'
// 建立socket.io通信
const socket = socketio.connect('http://36.103.242.204:8081')
export default {
  data() {
    return {
      msg: '',
      name: '游客',
      onlineTip: '',
      messages: []
    }
  },
  mounted() {
    this.name = this.name + this.random(1, 100)
    // 监听通信事件
    socket.on('online', name => {
      if (!name) {
        return
      }
      this.onlineTip = `${name}加入群聊`
      this.showTip()
    })

    socket.on('receiveMsg', data => {
      // console.log('receiveMsg :', data)
      this.messages.push(data)
    })

    // 发送上线事件
    // socket.emit('online', this.name)
  },
  computed: {
    visible() {
      if (this.$store.state.interface_wx_visible) {
        // 发送上线事件
        socket.emit('online', this.name)
      }
      return this.$store.state.interface_wx_visible
    },
    msgList() {
      return this.messages
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceWxVisible')
      this.$store.commit('changeTaskWxVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceWxVisible')
    },
    sendMsg() {
      let msgObj = {
        name: this.name,
        msg: this.msg
      }
      this.messages.push(msgObj)
      socket.emit('sendMsg', msgObj)
      this.msg = ''
      let uldiv = this.$refs.ulRef
      uldiv.scrollTop = uldiv.scrollHeight
    },
    random(lower, upper) {
      return Math.floor(Math.random() * (upper - lower)) + lower
    },
    showTip() {
      this.$notify({
        title: '聊天室提示',
        message: this.onlineTip,
        duration: 2000,
        // onClick:this.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  width: 400px;
  height: 500px;
  background-color: #fff;

  .control {
    position: absolute;
    top: 0px;
    right: 8px;
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
  .content {
    width: 100%;
    height: 90%;
    background-color: #bbdefb;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: auto;

      li {
        width: auto;
        box-sizing: border-box;
        padding: 0 20px;
        // background-color: rgb(101, 152, 219);
        margin: 10px 0;
        border-bottom: 1px solid #333;
        word-wrap: break-word;
      }
    }
    ul::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }
    ul::-webkit-scrollbar-thumb {
      background-color: rgba(158, 158, 158, 0);
    }
  }
  .send {
    width: 100%;
    height: 10%;
    // background-color: rgb(93, 214, 144);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #333;
    position: relative;
    input {
      width: 100%;
      height: 90%;
      margin: 0;
      padding: 0;
      // line-height: 40px;
      font-size: 1.2em;
    }
    .send-btn {
      position: absolute;
      right: 5px;
    }
  }
}
</style>
