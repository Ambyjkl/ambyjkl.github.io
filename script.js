"use strict";
var partyMode = false;
function changeBackground() {
    var r,g,b;
    if (partyMode) {
        r = Math.floor(Math.random() *256);
        g = Math.floor(Math.random() *256);
        b = Math.floor(Math.random() *256);
    } else {
        var today = new Date();
        var s = today.getSeconds() + today.getMilliseconds() / 1000;
        var m = today.getMinutes() + s / 60;
        var h = today.getHours() + m / 60;
        r = Math.trunc((h < 12) ? (h * 256 / 12) : ((24 - h) * 256 / 12));
        g = Math.trunc((m < 30) ? (m * 256 / 30) : ((60 - m) * 256 / 30));
        b = Math.trunc((s < 30) ? (s * 256 / 30) : ((60 - s) * 256 / 30));
    }
    var R = g;
    var G = b;
    var B = r;
    var rr = Math.trunc(Math.pow((r * r + R * R)/2, 0.5));
    var gg = Math.trunc(Math.pow((g * g + G * G)/2, 0.5));
    var bb = Math.trunc(Math.pow((b * b + B * B)/2, 0.5));
    document.getElementsByTagName("body")[0].style.backgroundImage= `linear-gradient(to top,  rgb(${r},${g},${b}) 0%, rgb(${R},${G},${B}) 100%)`
    document.getElementById("me").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
    document.getElementById("HyperSpace").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
    document.getElementById("ASCIInator").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
}
setInterval(function() {
    changeBackground();
}, 117);
document.getElementById("party").style.display="none";
document.getElementById("me").onclick = () => {
    partyMode = ! partyMode;
    if (partyMode) {
        document.getElementById("party").style.display="initial";
    } else {
        document.getElementById("party").style.display="none";
    }
}
