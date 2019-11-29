<template>
  <div class="music" v-drag v-if="visible">
    <div class="content" :style="bgContent">
      <div class="title">
        <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
          <use xlink:href="#icon-weishenhe" />
        </svg>
        <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
          <use xlink:href="#icon-shanchuhang" />
        </svg>
      </div>
      <audio ref="audioRef" src="">
        <source src="" />
      </audio>
      <div class="song-name">{{songName}}</div>
      <el-slider v-model="progress" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="control">
      <svg class="icon icon-volumedisable" aria-hidden="true" @click="muted">
        <use xlink:href="#icon-volumedisable" />
      </svg>
      <svg class="icon icon-back" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-back" />
      </svg>
      <svg class="icon icon-play" aria-hidden="true" @click="play" v-if="playVisible">
        <use xlink:href="#icon-play" />
      </svg>
      <svg class="icon icon-pause" aria-hidden="true" @click="pause" v-if="pauseVisible">
        <use xlink:href="#icon-pause" />
      </svg>
      <svg class="icon icon-next" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-next" />
      </svg>
      <svg class="icon icon-repeat" aria-hidden="true" @click="repeat">
        <use xlink:href="#icon-repeat" />
      </svg>
    </div>
  </div>
</template>

<script>
import { login, topsong, search, userplaylist, userlikelist, songUrl, lyric, songDetail } from '../../../api/music'
export default {
  data() {
    return {
      progress: 0,
      playVisible: true,
      pauseVisible: false,
      idOfSetinterval: 0,
      songName: '',
      songsrc: ' ',
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
    login().then(res => {
      console.log('login-res :', res)
      this.userId = res.data.account.id
      userlikelist(this.userId)
        .then(res => {
          console.log('playlist :', res)
          this.songlist = res.data.ids
          this.currentSongId = this.songlist[this.currentIndex]

          songUrl(this.currentSongId).then(res => {
            console.log('song :', res)
            let audioRef = this.$refs.audioRef
            console.log('this :', this);
            // console.log('audioRef :', audioRef);
            audioRef && (audioRef.src = res.data.data[0].url)
          })

          songDetail(this.currentSongId).then(res => {
            console.log('songDetail :', res)
            this.songName = res.data.songs[0].name
            this.picUrl = res.data.songs[0].al.picUrl
            this.bgContent.backgroundImage = `url(${this.picUrl})`
          })
        })
        .catch(err => console.log('err :', err))
    })
    // songUrl(this.currentSongId).then(res => {
    //   console.log('song :', res)
    //   const audioRef = this.$refs.audioRef
    //   audioRef.src = res.data.data[0].url
    // })
    // songDetail(this.currentSongId).then(res => {
    //   console.log('songDetail :', res)
    //   this.songName = res.data.songs[0].name
    //   this.picUrl = res.data.songs[0].al.picUrl
    //   this.bgContent.backgroundImage = `url(${this.picUrl})`
    // })
  },
  computed: {
    visible() {
      return this.$store.state.interface_qqmusic_visible
    }
  },
  watch: {
    progress() {
      let audioRef = this.$refs.audioRef
      console.log('watch-audioRef :', audioRef)
      audioRef.currentTime = audioRef.duration * (this.progress / 100)
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceQQmusicVisible')
      this.$store.commit('changeTaskQQmusicVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceQQmusicVisible')
    },
    play() {
      const audioRef = this.$refs.audioRef
      // const currentSongId = this.songlist[this.currentIndex]
      audioRef.play()
      this.playVisible = false
      this.pauseVisible = true
      // // console.log('autoref :', audioRef)
      // // 每0.5秒计算进度条长度
      // this.idOfSetinterval = setInterval(this.present, 500)
    },
    pause() {
      this.pauseVisible = false
      this.playVisible = true
      let audioRef = this.$refs.audioRef
      audioRef.pause()
      clearInterval(this.idOfSetinterval)
    },
    present() {
      let audioRef = this.$refs.audioRef
      let length = (audioRef.currentTime / audioRef.duration) * 100
      // console.log('length :', length)
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
    // background-color: #5898df;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    position: relative;
    // background: url('../../../assets/demo.jpg') no-repeat;
    background-size: cover;
    .el-slider {
      position: absolute;
      padding-bottom: 0;
      margin-bottom: 0;
      bottom: -16px;
      width: 100%;
      // height: 15px;
      left: 50%;
      transform: translate(-50%);
      /deep/.el-slider__button {
        width: 12px;
        height: 12px;
        opacity: 0;
        // border: 1px solid 409eff;
      }
      /deep/.el-slider__bar {
        border-radius: 0;
        // #9894c4
        background-color: #e06565;
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
      font-size: 1em;
      color: rgb(119, 114, 114);
    }
  }

  .control {
    width: 100%;
    height: 20%;
    background-color: #edebf8;
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
