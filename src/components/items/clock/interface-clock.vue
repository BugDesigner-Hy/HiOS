<template>
  <div class="clock middle" v-if="visible" v-drag>
    <div class="biaopan middle">
      <div class="dot middle">
        <div class="red-dot middle"></div>
      </div>
      <div class="hour-pointer middle" :style="{transform:'rotate('+hourPointer+'deg)'}"></div>
      <div class="min-pointer middle" :style="{transform:'rotate('+minPointer+'deg)'}"></div>
      <div class="sec-pointer middle" :style="{transform:'rotate('+secPointer+'deg)'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hourPointer: '',
      minPointer: '',
      secPointer: ''
    }
  },
  mounted: function() {
    setInterval(this.runClock, 1000)
  },
  computed: {
    visible() {
      return this.$store.state.interface_clock_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceClockVisible')
      this.$store.commit('changeTaskClockVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceClockVisible')
    },
    runClock() {
      let date = new Date()
      let hour = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSeconds()

      this.hourPointer = hour * 30 + -90
      this.minPointer = min * 6 + -90
      this.secPointer = sec * 6 + -90
      //   console.log('hourPointer :', this.hourPointer)
      //   console.log('minPointer :', this.minPointer)
      //   console.log('secPointer :', this.secPointer)
      //   this.$refs.hourRef.
    }
  }
}
</script>

<style lang="scss" scoped>
.clock {
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 70px;
  box-shadow: 0 0 5px 4px #616161, 0px -2px 10px 4px #bdbdbd inset;

  .biaopan {
    width: 222px;
    height: 222px;
    border-radius: 50%;
    background-color: #5d5d5d;
    position: relative;
    box-shadow: 0 -4px 5px 2px #b7b2b2e0, 0 0 35px 0px #424242 inset;
    .dot {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 15;
      box-shadow: 0 0 4px 1px #9e9e9e;
      .red-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #b71c1c;
      }
    }
    .hour-pointer {
      width: 78px;
      height: 18px;
      border-radius: 15px;
      background-color: #fff;
      top: 46%;
      transform-origin: left center;
      transform: rotate(0deg);
      box-shadow: 5px 7px 6px 0px #424242;
      z-index: 10;
    }

    .min-pointer {
      width: 97px;
      height: 18px;
      border-radius: 15px;
      background-color: #fff;
      top: 46%;
      transform-origin: left center;
      transform: rotate(-60deg);
      box-shadow: 5px 7px 6px 0px #424242;
      z-index: 10;
    }
    .sec-pointer {
      width: 130px;
      height: 2px;
      border-radius: 10px;
      background-color: #b71c1c;
      top: 50%;
      left: 35%;
      transform-origin: 33px 1px;
      transform: rotate(0deg);
      z-index: 20;
    }
  }
}
</style>
