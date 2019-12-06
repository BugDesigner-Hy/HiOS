<template>
  <div class="jisuanqi middle" v-if="visible" v-drag>
    <div class="main">
      <div class="content">
        <div class="screen middle">{{result}}</div>
      </div>
      <div class="tool">
        <div class="ac" @click="ac()">AC</div>
        <div class="cal" @click="claculate()">=</div>
      </div>
      <div class="control">
        <div class="btn" @click="push1()">1</div>
        <div class="btn" @click="push2()">2</div>
        <div class="btn" @click="push3()">3</div>
        <div class="btn" @click="pushAdd()">+</div>
        <div class="btn" @click="pushDivision()">/</div>
        <div class="btn" @click="push4()">4</div>
        <div class="btn" @click="push5()">5</div>
        <div class="btn" @click="push6()">6</div>
        <div class="btn" @click="pushSub()">-</div>
        <div class="btn" @click="pushMult()">x</div>
        <div class="btn" @click="push7()">7</div>
        <div class="btn" @click="push8()">8</div>
        <div class="btn" @click="push9()">9</div>
        <div class="btn" @click="push0()">0</div>
        <div class="btn" @click="pushDot()">.</div>
      </div>
    </div>
    <div class="paper" ref="paperRef" :style="{top:isUp?'-120px':'0'}">{{paperResult}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUp: false,
      stack: [],
      paperResult:'',
      operator: ['+', '-', '*', '/']
    }
  },
  computed: {
    visible() {
      return this.$store.state.interface_jisuanqi_visible
    },
    result() {
      return this.stack.join('')
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceJisuanqiVisible')
      this.$store.commit('changeTaskJisuanqiVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceJisuanqiVisible')
    },
    claculate() {
      // 末尾是运算符 则去掉运算符
      let lastItem = this.stack[this.stack.length - 1]
      if (this.operator.indexOf(lastItem) > -1) {
        this.stack.length = this.stack.length - 1
      }
      let express = this.stack.join('')
      //   console.log('express :', express)
      let res = ''
      try {
        res = eval(express)
      } catch (error) {
        this.stack = []
        this.stack.push('ERROR')
        return
      }
      //   console.log('res :', res)
      this.isUp = true
      this.stack = []
      this.stack.push(res.toFixed(2))
      this.paperResult = this.result
    },
    ac() {
      this.stack = []
      this.paperResult = ''
      this.isUp = false
    },
    push0() {
      this.stack.push(0)
    },
    push1() {
      this.stack.push(1)
    },
    push2() {
      this.stack.push(2)
    },
    push3() {
      this.stack.push(3)
    },
    push4() {
      this.stack.push(4)
    },
    push5() {
      this.stack.push(5)
    },
    push6() {
      this.stack.push(6)
    },
    push7() {
      this.stack.push(7)
    },
    push8() {
      this.stack.push(8)
    },
    push9() {
      this.stack.push(9)
    },
    pushAdd() {
      this.stack.push('+')
    },
    pushSub() {
      this.stack.push('-')
    },
    pushDivision() {
      this.stack.push('/')
    },
    pushMult() {
      this.stack.push('*')
    },
    pushDot() {
      let lastItem = this.stack[this.stack.length - 1]
      //如果已经有小数点 则不再入栈
      if (lastItem == '.') {
        return
      }
      this.stack.push('.')
    }
  }
}
</script>

<style lang="scss" scoped>
.jisuanqi {
  width: 400px;
  height: 470px;
  background-color: #fff;
  border-radius: 42px;
  .main {
    width: 100%;
    height: 100%;
    border-radius: 42px;
    z-index: 999;
    // background: none;
    box-shadow: 0 0 5px #333, 1px 0 5px #333 inset;
    .content {
      width: 100%;
      height: 40%;
      //   background-color: rgb(219, 51, 51);
      position: relative;
      border-top-left-radius: 42px;
      border-top-right-radius: 42px;
      .screen {
        width: 80%;
        height: 50%;
        border-radius: 20px;
        background-color: #f69fa7;
        text-align: start;
        text-indent: 20px;
        font-size: 3em;
        line-height: 118px;
        color: #fff;
        overflow: hidden;
      }
    }
    .tool {
      width: 100%;
      height: 10%;
      //   background-color: rgb(93, 226, 159);
      position: relative;
      display: flex;
      align-items: center;
      .ac,
      .cal {
        width: 50px;
        height: 30px;
        border-radius: 10px;
        background-color: #f69fa7;
        position: absolute;
        box-shadow: 0 0 2px #bdbdbd;
        text-align: center;
        line-height: 30px;
        color: #fff;
        cursor: pointer;
      }
      .ac {
        left: 50px;
        letter-spacing: 2px;
      }
      .cal {
        right: 50px;
        font-size: 2em;
      }
      .ac:active,
      .cal:active {
        box-shadow: 0 2px 2px #fff, 0px 1px 3px #757575 inset;
      }
    }
    .control {
      width: 100%;
      height: 50%;
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(5, 1fr);
      box-sizing: border-box;
      padding: 0 42px;
      justify-self: center;
      border-bottom-left-radius: 42px;
      border-bottom-right-radius: 42px;
      box-shadow: 1px 3px 10px 2px #9e9e9e, 0 4px -1px #212121;
      .btn {
        // background-color: rgb(230, 89, 211);
        box-shadow: 0 0 4px #bdbdbd;
        border-radius: 50%;
        margin: 12px 5px;
        text-align: center;
        line-height: 53px;
        font-size: 2em;
        color: #e2e0e3;
        cursor: pointer;
        text-shadow: 0 0 1px #e0e0e0;

        // transition: 0.2s;
      }
      .btn:active {
        box-shadow: 0 -2px 2px #bdbdbd, 0 2px 2px #fff, 0 0 1px #bdbdbd inset;
      }
      .btn:nth-last-child(1) {
        line-height: 26px;
        font-size: 3em;
        color: #f69fa7;
      }
      .btn:nth-child(9) {
        font-size: 3.5em;
        line-height: 46px;
      }
    }
  }
  .paper {
    width: 150px;
    height: 120px;
    position: absolute;
    top: 0px;
    left: 50px;
    background-image: radial-gradient(transparent 0, transparent 7px, #fff 5px);
    background-size: 18px 18px;
    background-position: 8px -10px;
    z-index: -99;
    transition: 5s;
    text-align: left;
    text-indent: 20px;
    line-height: 150px;
    color: #cbc9cc;
    overflow: hide;
    overflow-wrap: break-word;
  }
  .paper:before {
    content: 'RESULT';
    display: block;
    background-color: #fff;
    position: absolute;
    top: 11px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -99;
    line-height: 88px;
  }
}
.up {
  top: -120px;
}
.tear-off {
  transform-origin: left center;
}
</style>
