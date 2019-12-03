<template>
  <div class="xiangce" v-if="visible">
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="title">
      Gallery
      <div class="line"></div>
    </div>

    <div class="gallery">
      <div
        class="pic"
        :style="{width:itemWidth+'px',height:itemWidth+'px'}"
        v-for="(item,index) in items"
        :key="index"
        @click="()=>preview(item,index)"
      >
        <img :src="item.picSrc" />
      </div>
    </div>
    <div class="preview" :style="{opacity:previewOpacity,zIndex:previewZindex}">
      <div class="wrapper">
        <img :src="currentPic" />
      </div>
      <i class="el-icon-close" @click="previewHide"></i>
      <i class="el-icon-back" @click="pre"></i>
      <i class="el-icon-right" @click="next"></i>
    </div>
    <el-slider v-model="itemWidth" :step="10" :min="100" :max="500" :show-tooltip="false"></el-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemWidth: 200,
      curIndex: 0,
      previewOpacity: 0,
      previewZindex: -1,
      iconZindex: -1,
      currentPic: require('../../../assets/demo.jpg'),
      items: [
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/demo.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        },
        {
          picSrc: require('../../../assets/1.jpg')
        },
        {
          picSrc: require('../../../assets/2.jpg')
        },
        {
          picSrc: require('../../../assets/3.jpg')
        },
        {
          picSrc: require('../../../assets/4.jpg')
        }
      ]
    }
  },
  computed: {
    visible() {
      return this.$store.state.interface_xiangce_visible
    }
  },
  methods: {
    showPreview() {
      this.previewOpacity = 1
    },
    preview(item, index) {
      //   console.log('item :', item)
      this.curIndex = index
      this.currentPic = item.picSrc
      this.previewOpacity = 1
      this.previewZindex = 999
    },
    previewHide() {
      this.previewOpacity = 0
      this.previewZindex = -1
    },
    pre() {
      if (this.curIndex == 0) return
      this.curIndex = this.curIndex - 1
      this.currentPic = this.items[this.curIndex].picSrc
    },
    next() {
      if (this.curIndex == this.items.length - 1) return
      this.curIndex = this.curIndex + 1
      this.currentPic = this.items[this.curIndex].picSrc
    },
    close() {
      this.$store.commit('changeInterfaceXiangceVisible')
      this.$store.commit('changeTaskXiangceVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceXiangceVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
.xiangce {
  width: 75vw;
  height: 70vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border-radius: 5px;
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

  .title {
    width: 100%;
    height: 15%;
    text-align: center;
    line-height: 105px;
    text-transform: uppercase;
    font-size: 1.7em;
    position: relative;
    font-family: 'montserrat', sans-serif;
    font-weight: 700;
    // display: block;
    .line {
      width: 7vw;
      height: 2px;
      margin: 0 auto;
      background-color: #333;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .gallery {
    width: 100%;
    height: 85%;
    // background-color: rgb(238, 108, 108);
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 auto;

    .pic {
      width: 25%;
      height: auto;
      overflow: hidden;
      cursor: pointer;
      box-sizing: border-box;
      padding: 3px;
      transition: 0.3s;
      img {
        width: 100%;
        height: 100%;
        transition: 0.4s;
      }
    }

    .pic:hover img {
      transform: scale(1.4) rotate(15deg);
    }
    .pic:hover {
      padding: 0;
    }
  }

  .gallery::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  .gallery::-webkit-scrollbar-thumb {
    background-color: rgba(158, 158, 158, 0);
  }

  .preview {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(97, 97, 97, 0.7);
    top: 0;
    transition: 0.5s;
    // opacity: 0;
    z-index: -1;

    .wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40vw;
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
      }
    }

    i {
      position: absolute;
      top: 50%;
    }
    .el-icon-back {
      font-size: 1.8em;
      left: 30px;
      transition: 0.3s;
    }
    .el-icon-right {
      font-size: 1.8em;
      right: 30px;
      transition: 0.3s;
    }
    .el-icon-close {
      font-size: 1.8em;
      right: 30px;
      top: 30px;
      transition: 0.5s;
    }
    .el-icon-back:hover {
      left: 25px;
    }
    .el-icon-right:hover {
      right: 25px;
    }
    .el-icon-close:hover {
      transform: rotate(180deg);
    }
  }
  /deep/.el-slider {
    opacity: 0.4;
    position: absolute;
    bottom: 10px;
    width: 30vw;
    left: 50%;
    transition: 0.3s;
    transform: translateX(-50%);
    // z-index: 888;
    .el-slider__runway {
      height: 3vh;
      margin: 0;
      border-radius: 10px;
      .el-slider__bar {
        height: 3vh;
        border-radius: 10px;
      }
      .el-slider__button-wrapper {
        height: 40px;
        width: 40px;
        top: -4px;
        .el-slider__button {
          width: 23px;
          height: 23px;
        }
      }
    }
  }
  /deep/.el-slider:hover {
    opacity: 0.8;
  }
}
</style>