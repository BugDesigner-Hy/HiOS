import Vue from 'vue'

Vue.directive('drag', {
  bind: function (el) {
    el.onmousedown = (e) => {
      var disx = e.clientX - el.offsetLeft
      var disy = e.clientY - el.offsetTop
      document.onmousemove = function (e) {
        let left = e.clientX - disx
        let top = e.clientY - disy
        if (left <= 0) {
          left = 0
        } else if (left >= document.documentElement.clientWidth - el.offsetWidth) {
          left = document.documentElement.clientWidth - el.offsetWidth
        }

        if (top <= 0) {
          top = 0
        } else if (top >= document.documentElement.clientHeight - el.offsetHeight) {
          top = document.documentElement.clientHeight - el.offsetHeight
        }
        el.style.left = left + 'px'
        el.style.top = top + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  }
})
