<template>
  <div class="wenjianjia middle" v-if="visible" v-drag>
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <div class="address">
      <i class="el-icon-back" @click="getback()"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in path" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="files">
      <div
        class="file"
        v-for="(file,index) in curFiles.child"
        :key="index"
        @dblclick="()=>getFiles(file)"
      >
        <svg class="icon icon-wenjianjia1" aria-hidden="true" v-if="file.isDir">
          <use xlink:href="#icon-wenjianjia1" />
        </svg>
        <i class="el-icon-document" v-if="!file.isDir"></i>
        <div class="name">{{file.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: ['home'],
      history: [],
      root: {
        name: 'home',
        isDir: true,
        child: [
          {
            name: 'movie',
            isDir: true,
            child: [
              {
                name: 'movie1',
                isDir: true,
                child: [
                  {
                    name: '哈利波特大.mp4',
                    isDir: false,
                    child: []
                  }
                ]
              },
              { name: 'test.mp4', isDir: false, child: [] }
            ]
          },
          {
            name: 'music',
            isDir: true,
            child: [
              {
                name: '郭德纲相声精选.mp3',
                isDir: false,
                child: []
              }
            ]
          },
          {
            name: '明朝那些事儿.txt',
            isDir: false,
            child: []
          }
        ]
      },
      curFiles: ''
    }
  },
  mounted: function() {
    this.curFiles = this.root
    this.history.push(this.root)
  },
  computed: {
    visible() {
      return this.$store.state.interface_wenjianjia_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceWenjianjiaVisible')
      this.$store.commit('changeTaskWenjianjiaVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceWenjianjiaVisible')
    },
    getFiles(files) {
      if (!files.isDir) {
        return
      }
      this.curFiles = files
      this.path.push(files.name)
      this.history.push(files)
    },
    getback() {
      if (this.history.length == 1) {
        return
      }
      this.path.pop()
      this.history.pop()
      this.curFiles = this.history[this.history.length - 1]
    }
  }
}
</script>

<style lang="scss" scoped>
.wenjianjia {
  width: 600px;
  height: 400px;
  background-color: #fff;

  .control {
    position: absolute;
    top: 0px;
    right: 5px;
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

  .address {
    width: 100%;
    height: 15%;
    // background-color: rgb(241, 109, 109);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    border-bottom: 1px solid #333;
    i {
      margin: 0 5px;
      font-size: 1.5em;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .files {
    width: 100%;
    height: 85%;
    // background-color: rgb(94, 207, 173);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;

    .file {
      width: 100px;
      height: 100px;
      //   background-color: rgb(172, 233, 115);
      margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      text-align: center;
      .icon {
        width: 50px;
        height: 50px;
      }
      i {
        font-size: 3em;
        display: block;
        margin-bottom: 5px;
      }
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
      }
    }
  }
}
</style>
