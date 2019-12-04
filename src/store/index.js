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
    task_rili_visible: false,
    bgc: require('../assets/bg.jpg'),
    remindList: [
      {
        content: '下午两点开会',
        date: '2019-12-01',
        done: true
      },
      {
        content: '明天吃烤鸭',
        date: '2019-12-02',
        done: true
      },
      {
        content: '后天吃大盘鸡',
        date: '2019-12-02',
        done: false
      },
      {
        content: '周末去爬山',
        date: '2019-12-04',
        done: false
      }
    ]

  },
  mutations: {
    updateBgc(state, newbgc) {
      // console.log('state.bgc :', state.bgc);
      state.bgc = newbgc
      console.log('state.bgc :', state.bgc);
    },
    updateRemindList(state, newList) {
      state.remindList = newList
    },
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
    updateRemindList(context, newlist) {
      context.commit('updateRemindList', newlist)
    },
    updateBgc(context, newBgc) {
      context.commit('updateBgc', newBgc)
    }
  },
  modules: {
  }
})
