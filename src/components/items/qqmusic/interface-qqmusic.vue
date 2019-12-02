<template>
  <div class="music" v-drag v-if="visible">
    <div class="content">
      <img :src="picUrl" ref="imgRef" class="bgpic" />
      <div class="title">
        <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
          <use xlink:href="#icon-weishenhe" />
        </svg>
        <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
          <use xlink:href="#icon-shanchuhang" />
        </svg>
      </div>
      <audio ref="audioRef" src></audio>
      <div class="song-name">{{songName}}</div>
      <div class="author">{{author}}</div>
      <el-slider v-model="progress" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="control">
      <svg class="icon icon-volumedisable" aria-hidden="true" @click="muted">
        <use xlink:href="#icon-volumedisable" />
      </svg>
      <svg class="icon icon-back" aria-hidden="true" @click="preSong">
        <use xlink:href="#icon-back" />
      </svg>
      <svg class="icon icon-play" aria-hidden="true" @click="play" v-if="playVisible">
        <use xlink:href="#icon-play" />
      </svg>
      <svg class="icon icon-pause" aria-hidden="true" @click="pause" v-if="pauseVisible">
        <use xlink:href="#icon-pause" />
      </svg>
      <svg class="icon icon-next" aria-hidden="true" @click="nextSong">
        <use xlink:href="#icon-next" />
      </svg>
      <svg class="icon icon-repeat" aria-hidden="true" @click="repeat">
        <use xlink:href="#icon-repeat" />
      </svg>
    </div>
  </div>
</template>

<script>
import { topsong, songUrl, lyric, songDetail } from '../../../api/music'
export default {
  data() {
    return {
      progress: 0,
      playVisible: true,
      pauseVisible: false,
      idOfSetinterval: 0,
      songName: '',
      songUrl: ' ',
      author: '',
      currentIndex: 0,
      currentSongId: '',
      songlist: '',
      userId: '',
      picUrl: '',
      bgContent: {
        backgroundImage: `url(${require('../../../assets/demo.jpg')})`
      }
    }
  },
  mounted: function() {
    topsong()
      .then(res => {
        // console.log('topsong :', res)
        return new Promise((resolve, reject) => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res.statusText)
          }
        })
      })
      .then(res => {
        this.songlist = res.data
        this.currentSongId = this.songlist[this.currentIndex].id
        songUrl(this.currentSongId).then(res => {
          // console.log('song :', res)
          this.songUrl = res.data.data[0].url
        })
        return new Promise((resolve, reject) => {
          if (res.code === 200) {
            resolve(this.currentSongId)
          } else {
            reject('wrong request')
          }
        })
      })
      .then(res => {
        songDetail(this.currentSongId).then(res => {
          this.songName = res.data.songs[0].name
          this.picUrl = res.data.songs[0].al.picUrl
          this.author = res.data.songs[0].ar[0].name
          this.bgContent.backgroundImage = `url(${this.picUrl})`
        })
      })
  },
  computed: {
    visible() {
      return this.$store.state.interface_qqmusic_visible
    }
  },
  watch: {
    progress() {
      let audioRef = this.$refs.audioRef
      // console.log('watch-audioRef :', audioRef)
      // audioRef.currentTime = audioRef.duration * (this.progress / 100)
    }
  },
  methods: {
    close() {
      let audioRef = this.$refs.audioRef
      this.pause()
      this.$store.commit('changeInterfaceQQmusicVisible')
      this.$store.commit('changeTaskQQmusicVisible')
    },
    minimize() {
      let audioRef = this.$refs.audioRef
      this.pause()
      this.$store.commit('changeInterfaceQQmusicVisible')
    },
    play() {
      let audioRef = this.$refs.audioRef
      if (audioRef.src != this.songUrl) {
        audioRef.src = this.songUrl
      }
      audioRef.play()
      this.playVisible = false
      this.pauseVisible = true
      // // 每0.5秒计算进度条长度
      this.idOfSetinterval = setInterval(this.present, 500)
    },
    pause() {
      clearInterval(this.idOfSetinterval)
      this.pauseVisible = false
      this.playVisible = true
      let audioRef = this.$refs.audioRef
      audioRef.pause()
    },
    present() {
      let audioRef = this.$refs.audioRef
      let length = (audioRef.currentTime / audioRef.duration) * 100
      this.progress = length
      if (audioRef.ended) {
        this.pauseVisible = false
        this.playVisible = true
      }
    },
    formatTooltip(val) {
      if (val) {
        return val.toFixed(1)
      }
      return 0
    },
    muted() {
      let audioRef = this.$refs.audioRef
      // console.log('muted :', audioRef.muted)
      audioRef.muted = !audioRef.muted
    },
    repeat() {
      let audioRef = this.$refs.audioRef
      audioRef.loop = true
    },
    preSong() {
      if (this.currentIndex > 0) {
        this.currentIndex = this.currentIndex - 1
        this.loadSong()
      } else {
        this.$message({
          message: '没有上一首了哦',
          type: 'warning'
        })
      }
    },
    nextSong() {
      if (this.currentIndex <= this.songlist.length - 1) {
        this.currentIndex = this.currentIndex + 1
        this.loadSong()
      } else {
        this.$message({
          message: '已经到头啦',
          type: 'warning'
        })
      }
    },
    loadSong() {
      this.currentSongId = this.songlist[this.currentIndex].id
      songDetail(this.currentSongId).then(res => {
        this.songName = res.data.songs[0].name
        this.picUrl = res.data.songs[0].al.picUrl
        this.author = res.data.songs[0].ar[0].name
        this.bgContent.backgroundImage = `url(${this.picUrl})`
      })
      songUrl(this.currentSongId).then(res => {
        this.songUrl = res.data.data[0].url
        let audioRef = this.$refs.audioRef
        audioRef.src = this.songUrl
        this.play()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.music {
  width: 350px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .content {
    width: 100%;
    height: 80%;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    position: relative;
    background-size: cover;
    overflow: hidden;
    .bgpic {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
    .bgpic:hover {
      opacity: 0.5;
      transform: scale(1.2);
    }
    .bgpic:hover ~ .song-name {
      opacity: 1;
    }
    .bgpic:hover ~ .author {
      opacity: 1;
    }
    .el-slider {
      position: absolute;
      padding-bottom: 0;
      margin-bottom: 0;
      bottom: -16px;
      width: 100%;
      left: 50%;
      transform: translate(-50%);
      /deep/.el-slider__button {
        width: 12px;
        height: 12px;
        opacity: 0;
      }
      /deep/.el-slider__bar {
        border-radius: 0;
        background-color: rgb(224, 101, 101);
      }
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
    .song-name {
      position: absolute;
      top: 35px;
      text-align: center;
      width: 100%;
      font-size: 1.3em;
      font-weight: 800;
      letter-spacing: 2px;
      color: rgba(168, 8, 43, 0.8);
      opacity: 0;
      transition: 1;
    }
    .author {
      position: absolute;
      top: 65px;
      text-align: center;
      width: 100%;
      font-size: 0.8em;
      letter-spacing: 2px;
      color: rgba(24, 2, 7, 0.7);
      opacity: 0;
      transition: 1;
    }
  }

  .control {
    width: 100%;
    height: 20%;
    background-color: rgb(238, 236, 248);
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -1;
    .icon {
      font-size: 1.5em;
      margin: 0 20px;
    }
    .icon:hover {
      font-size: 1.7em;
    }
    .icon-volumedisable {
      position: absolute;
      left: 10px;
      bottom: 20px;
      opacity: 0.5;
      font-size: 1em;
    }
    .icon-volumedisable:hover {
      font-size: 1.1em;
    }
    .icon-repeat {
      position: absolute;
      right: 10px;
      bottom: 20px;
      opacity: 0.5;
      font-size: 1em;
    }
    .icon-repeat:hover {
      font-size: 1.1em;
    }
  }
}
</style>
