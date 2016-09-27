function changeBackground(){
    var today = new Date();
    var s = today.getSeconds() + today.getMilliseconds()/1000;
    var m = today.getMinutes() + s/60;
    var h = today.getHours()+ m/60;
    var r = Math.trunc((h < 12) ? (h *256/12) : ((24-h) *256/12));
    var R = 255 - r;
    var g = Math.trunc((m < 30) ? (m *256/30) : ((60-m) *256/30));
    var G = 255 - g;
    var b = Math.trunc((s < 30) ? (s *256/30) : ((60-s) *256/30));
    var B = 255 - b;
    var rr=Math.trunc(Math.pow(r*R,0.5));
    var gg=Math.trunc(Math.pow(g*G,0.5));
    var bb=Math.trunc(Math.pow(b*B,0.5));
    $("body").css({'background-image': `linear-gradient(to top,  rgb(${r},${g},${b}) 1%, rgb(${R},${G},${B}) 100%)`});
    //document.body.style.backgroundImage = `linear-gradient(to bottom, rgb(${r},${g},${b}) , rgb(${R},${G},${B}));`
    //document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById("me").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
}
setInterval(function() {
    changeBackground();
},117);