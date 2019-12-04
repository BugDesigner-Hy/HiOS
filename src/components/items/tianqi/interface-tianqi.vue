<template>
  <div class="tianqi middle" v-if="visible" v-drag>
    <img :src="bgPic" alt />
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="main">
      <div class="city">{{curItem.city}}</div>
      <div class="wea">{{curItem.wea}}</div>
      <div class="tem">{{curItem.tem}}</div>
      <div class="other">
        <span class="week">{{curItem.week}}</span>
        <span class="brief">{{curItem.brief}}</span>
        <span class="high-tem">{{curItem.htem}}</span>
        <span class="low-tem">{{curItem.ltem}}</span>
      </div>
    </div>
    <div class="future">
      <ul>
        <li v-for="(item,index) in items" :key="index" @click="()=>setbg(item)">
          <div class="week">{{item.week}}</div>
          <div class="wea">
            <i :class="item.icon"></i>
          </div>
          <div class="tem">{{item.htem}} {{item.ltem}}</div>
        </li>
      </ul>
    </div>
    <div class="detail">
      <ul>
        <li>
          <div class="day-detail richu">
            <div class="title">日出</div>上午7:56
          </div>
          <div class="day-detail riluo">
            <div class="title">日落</div>上午7:56
          </div>
        </li>
        <li>
          <div class="day-detail jiangxuegailv">
            <div class="title">日落</div>上午7:56
          </div>
          <div class="day-detail shidu">
            <div class="title">日落</div>上午7:56
          </div>
        </li>
        <li>
          <div class="day-detail wind">
            <div class="title">日落</div>上午7:56
          </div>
          <div class="day-detail tigan">
            <div class="title">日落</div>上午7:56
          </div>
        </li>
        <li>
          <div class="day-detail jiangshui">
            <div class="title">日落</div>上午7:56
          </div>
          <div class="day-detail qiya">
            <div class="title">日落</div>上午7:56
          </div>
        </li>
        <li>
          <div class="day-detail nengjiandu">
            <div class="title">日落</div>上午7:56
          </div>
          <div class="day-detail ziwaixian">
            <div class="title">日落</div>上午7:56
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgPic: require('../../../assets/sun-day.jpg'),
      curItem: '',
      items: [
        {
          city: '银川',
          day: '2019-12-04',
          wea: '晴天',
          tem: '4',
          week: '星期三',
          brief: '今天',
          htem: '4',
          ltem: '-13',
          icon: 'el-icon-sunny',
          pic: require('../../../assets/sun-day.jpg')
        },
        {
          city: '银川',
          day: '2019-12-05',
          wea: '多云',
          tem: '3',
          week: '星期四',
          brief: '明天',
          htem: '5',
          ltem: '-14',
          icon: 'el-icon-cloudy',
          pic: require('../../../assets/cloudy-day.jpg')
        },
        {
          city: '银川',
          day: '2019-12-06',
          wea: '雷雨',
          tem: '-2',
          week: '星期五',
          brief: '后天',
          htem: '4',
          ltem: '-16',
          icon: 'el-icon-lightning',
          pic: require('../../../assets/leizhenyu.jpg')
        },
        {
          city: '银川',
          day: '2019-12-07',
          wea: '小雨',
          tem: '3',
          week: '星期六',
          brief: '2019-12-07',
          htem: '3',
          ltem: '-14',
          icon: 'el-icon-light-rain',
          pic: require('../../../assets/yintian-day.jpg')
        },
        {
          city: '银川',
          day: '2019-12-08',
          wea: '多云',
          tem: '5',
          week: '星期一',
          brief: '2019-12-08',
          htem: '6',
          ltem: '-10',
          icon: 'el-icon-cloudy',
          pic: require('../../../assets/cloudy-day.jpg')
        },
        {
          city: '银川',
          day: '2019-12-09',
          wea: '小雪',
          tem: '-1',
          week: '星期二',
          brief: '2019-12-09',
          htem: '2',
          ltem: '-18',
          icon: 'el-icon-heavy-rain',
          pic: require('../../../assets/xiaoxue-day.jpg')
        },
        {
          city: '银川',
          day: '2019-12-10',
          wea: '小雨',
          tem: '4',
          week: '星期三',
          brief: '2019-12-10',
          htem: '4',
          ltem: '-13',
          icon: 'el-icon-light-rain',
          pic: require('../../../assets/yintian-night.jpg')
        }
      ]
    }
  },
  mounted: function() {
    this.curItem = this.items[0]
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
    height: 139%;
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
      height: 30%;
      color: #fff;
      line-height: 4;
      font-size: 2em;
      letter-spacing: 8px;
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
    height: 50%;
    // background-color: rgb(103, 158, 230);
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        width: 100%;
        height: 49px;
        box-sizing: border-box;
        // background-color: rgb(80, 218, 67);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding: 0 10px;
        cursor: pointer;
        i {
          font-size: 1.5em;
          color: #ffff00;
        }
        .tem {
          letter-spacing: 1px;
        }
      }
      li:hover {
        box-shadow: 2px 2px 5px 2px #fff inset;
      }
    }
  }
  .detail {
    width: 100%;
    height: 300px;
    // background-color: rgb(157, 214, 82);
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 1px solid rgb(189, 182, 182);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding: 0 10px;
        .day-detail {
          width: 50%;
          height: 60px;
          line-height: 60px;
          font-size: 1.2em;
          text-align: center;
          position: relative;
          .title {
            position: absolute;
            top: 5px;
            left: 1px;
            font-size: 0.5em;
            line-height: initial;
          }
        }
      }
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
