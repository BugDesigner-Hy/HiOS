<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img :src="bgImage" alt />
    <Desktop></Desktop>
    <TaskBar></TaskBar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TaskBar from './components/taskbar'
import Desktop from './components/desktop'

export default {
  name: 'app',
  components: {
    Desktop,
    TaskBar
  },
  data() {
    return {
      // bgc: ''
    }
  },
  // mounted: function() {
  //   this.bgc = this.$store.state.bgc
  // },
  computed: {
    bgImage: function() {
      return this.$store.state.bgc
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  /* background: url('../src/assets/demo.jpg') center repeat; */
  height: 100%;
  img {
    position: absolute;
    width:100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
