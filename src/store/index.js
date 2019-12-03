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
    task_tixing_visible: false,
    interface_xiangce_visible: false,
    task_xiangce_visible: false,
    interface_rili_visible: false,
    task_rili_visible: false

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
    },
    changeInterfaceXiangceVisible(state) {
      state.interface_xiangce_visible = !state.interface_xiangce_visible
    },
    changeTaskXiangceVisible(state) {
      state.task_xiangce_visible = !state.task_xiangce_visible
    },
    changeInterfaceRiliVisible(state) {
      state.interface_rili_visible = !state.interface_rili_visible
    },
    changeTaskRiliVisible(state) {
      state.task_rili_visible = !state.task_rili_visible
    }
  },
  actions: {
  },
  modules: {
  }
})
