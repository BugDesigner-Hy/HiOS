<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
  }
}
</script>

<style>
#app {
  background-color: #788ca5;
  height: 100%;
}
</style>
