<template>
  <div class="shipin middle" v-if="visible" v-drag>
    <div class="control">
      <svg class="icon icon-weishenhe" aria-hidden="true" @click="minimize">
        <use xlink:href="#icon-weishenhe" />
      </svg>
      <svg class="icon icon-shanchuhang" aria-hidden="true" @click="close">
        <use xlink:href="#icon-shanchuhang" />
      </svg>
    </div>
    <video
      class="video"
      preload="none"
      controls
      width="640"
      height="400"
      poster="./assets/poster.jpg"
      data-setup="{}"
    >
      <source src="http://36.103.242.204:8889/test.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a
          href="https://videojs.com/html5-video-support/"
          target="_blank"
        >supports HTML5 video</a>
      </p>
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    visible() {
      return this.$store.state.interface_shipin_visible
    }
  },
  methods: {
    close() {
      this.$store.commit('changeInterfaceShipinVisible')
      this.$store.commit('changeTaskShipinVisible')
    },
    minimize() {
      this.$store.commit('changeInterfaceShipinVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
.shipin {
  //   .video {
  //     width: 640px;
  //     height: 400px;
  //   }

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
}
</style>
