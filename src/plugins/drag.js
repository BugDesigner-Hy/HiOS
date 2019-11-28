import Vue from 'vue'

Vue.directive('drag', {
  bind: function (el) {
    el.onmousedown = (e) => {
      el.style.zIndex = 999
      var disx = e.clientX - el.offsetLeft
      var disy = e.clientY - el.offsetTop
      document.onmousemove = function (e) {
        let left = e.clientX - disx
        let top = e.clientY - disy
        // console.log('left :', left)
        // console.log('top :', top)
        if (left <= el.offsetWidth / 2) {
          left = el.offsetWidth / 2
        }
        let maxleft = document.documentElement.clientWidth - el.offsetWidth / 2
        if (left >= maxleft) {
          left = maxleft
        }
        if (top <= el.offsetHeight / 2) {
          top = el.offsetHeight / 2
        }
        let maxtop = document.documentElement.clientHeight - el.offsetHeight / 2
        if (top >= maxtop) {
          top = maxtop
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
