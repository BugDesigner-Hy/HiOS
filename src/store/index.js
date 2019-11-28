import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    interface_wx_visible: false,
    task_wx_visible: false,
    interface_qqmusic_visible: false,
    task_qqmusic_visible: false,
    interface_tixing_visible: false,
    task_tixing_visible: false

  },
  mutations: {
    changeInterfaceWxVisible(state) {
      state.interface_wx_visible = !state.interface_wx_visible
    },
    changeTaskWxVisible(state) {
      state.task_wx_visible = !state.task_wx_visible
    },
    changeInterfaceQQmusicVisible(state) {
      state.interface_qqmusic_visible = !state.interface_qqmusic_visible
    },
    changeTaskQQmusicVisible(state) {
      state.task_qqmusic_visible = !state.task_qqmusic_visible
    },
    changeInterfaceTixingVisible(state) {
      state.interface_tixing_visible = !state.interface_tixing_visible
    },
    changeTaskTixingVisible(state) {
      state.task_tixing_visible = !state.task_tixing_visible
    }
  },
  actions: {
  },
  modules: {
  }
})
