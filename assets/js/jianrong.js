var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth/650;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        document.write('<meta name="viewport" content="width=650, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
    } else {
        document.write('<meta name="viewport" content="width=650, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=650, user-scalable=no, target-densitydpi=device-dpi">');
}
