<template>
  <div class="tianqi middle" v-if="visible" v-drag>
    <img :src="curItem.pic" alt />
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="main">
      <input type="text" v-model.lazy="city" class="city" />
      <div class="wea">{{curItem.wea_day}}</div>
      <div class="tem">{{curItem.tem}}</div>
      <div class="other">
        <span class="week">{{curItem.week}}</span>
        <span class="brief">{{curItem.date}}</span>
        <span class="high-tem">{{curItem.tem1}}</span>
        <span class="low-tem">{{curItem.tem2}}</span>
      </div>
    </div>
    <div class="future">
      <ul>
        <li v-for="(item,index) in items.slice(1)" :key="index">
          <div class="week">{{item.week}}</div>
          <div class="wea">
            <i :class="item.icon"></i>
          </div>
          <div class="tem">{{item.tem1}} {{item.tem2}}</div>
        </li>
      </ul>
    </div>
    <div class="detail">
      <div class="wind">{{curItem.win[0]}}</div>
      <div class="speed">{{curItem.win_speed}}</div>
    </div>
  </div>
</template>

<script>
import { getfuture } from '../../../api/weather'
export default {
  data() {
    return {
      bgPic: require('../../../assets/sun-day.jpg'),
      city: '银川',
      curItem: '',
      items: []
    }
  },
  watch: {
    city() {
      getfuture(this.city).then(res => {
        this.city = res.data.city
        this.items = res.data.data
        this.addIconProperty(this.items)
        this.curItem = this.items[0]
      })
    }
  },
  mounted: function() {
    getfuture(this.city).then(res => {
      this.city = res.data.city
      this.items = res.data.data
      this.addIconProperty(this.items)
      this.curItem = this.items[0]
    })
  },
  computed: {
    visible() {
      return this.$store.state.interface_tianqi_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceTianqiVisible')
      this.$store.commit('changeTaskTianqiVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceTianqiVisible')
    },
    setbg(item) {
      this.curItem = item
      this.bgPic = item.pic
    },
    addIconProperty(items) {
      this.items.forEach(element => {
        switch (element.wea_day) {
          case '晴':
            element.icon = 'el-icon-sunny'
            element.pic = require('../../../assets/sun-day.jpg')
            break
          case '多云':
            element.icon = 'el-icon-cloudy'
            element.pic = require('../../../assets/cloudy-day.jpg')
            break
          case '小雨':
            element.icon = 'el-icon-light-rain'
            element.pic = require('../../../assets/dayu.jpg')
            break
          case '小雪':
            element.icon = 'el-icon-heavy-rain'
            element.pic = require('../../../assets/xiaoxue-day.jpg')
            break
          default:
            element.icon = 'el-icon-sunny'
            element.pic = require('../../../assets/sun-day.jpg')
            break
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tianqi {
  width: 450px;
  height: 680px;
  background-color: #9e9e9e;
  border-radius: 10px;
  overflow: auto;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.7;
    border-radius: 10px;
    transition: 0.2s;
  }

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

  .main {
    width: 100%;
    height: 45%;
    // background-color: rgb(236, 145, 145);
    .city,
    .wea,
    .tem,
    .other {
      width: 100%;
      text-align: center;
      color: #fff;
      margin: 0 auto;
    }
    .city {
      border: none;
      outline: none;
      background: none;
      height: 30%;
      color: #fff;
      font-size: 2.3em;
      letter-spacing: 8px;
      box-sizing: border-box;
      padding-top: 39px;
      cursor: pointer;
      //   background-color: rgb(83, 129, 216);
    }
    .wea {
      height: 10%;
      color: #fff;
      line-height: 1.5;
      font-size: 1em;
      letter-spacing: 2px;
      //   background-color: rgb(85, 231, 241);
    }
    .tem {
      height: 40%;
      color: #fff;
      line-height: 1;
      font-size: 7em;
      //   background-color: rgb(199, 130, 231);
    }
    .other {
      font-size: 1em;
      height: 20%;
      color: #fff;
      position: relative;
      text-align: start;
      .week,
      .brief,
      .high-tem,
      .low-tem {
        display: inline-block;
        position: absolute;
        height: 50px;
        bottom: 0px;
        line-height: 50px;
        font-size: 1em;
      }
      .week {
        width: 60px;
        left: 10px;
        font-size: 1.2em;
      }
      .brief {
        width: 120px;
        left: 80px;
      }
      .high-tem {
        right: 50px;
        width: 65px;
        text-align: end;
      }
      .low-tem {
        right: 10px;
        width: 65px;
        text-align: end;
      }
    }
  }
  .future {
    width: 100%;
    height: 43%;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        width: 100%;
        height: 48px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding: 0 10px;
        // cursor: pointer;
        i {
          font-size: 1.5em;
          color: #ffff00;
        }
        .tem {
          width: 80px;
          text-align: end;
          letter-spacing: 1px;
        }
      }
      //   li:hover {
      //     box-shadow: 2px 2px 5px 2px #fff inset;
      //   }
    }
  }
  .detail {
    width: 100%;
    height: 12%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      font-size: 1.5em;
      color: #fff;
    }
  }
}
.tianqi::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
.tianqi::-webkit-scrollbar-thumb {
  background-color: rgba(158, 158, 158, 0);
}
</style>
