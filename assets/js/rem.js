// 网易rem
(function (win, lib) {
  var flexible = lib.flexible || (lib.flexible = {})
  function a () {
    if (parseInt(document.documentElement.clientWidth) > 720) {
      document.documentElement.style.fontSize = 720 / 30 + 'px'
    } else {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 24 + 'px'
    }
  }
  var b = null
  flexible.dpr = 1
  flexible.rem = 100
  flexible.rem2px = function (d) {
    var val = parseFloat(d * 75 / 100) * this.rem
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px'
    }
    return val
  }
  flexible.px2rem = function (d) {
    var val = parseFloat(d) / this.rem
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem'
    }
    return val
  }
  win.addEventListener('resize',
    function () {
      clearTimeout(b)
      b = setTimeout(a, 100)
    },
    !1)
  a()
}(window, window.lib || (window.lib = {})))
