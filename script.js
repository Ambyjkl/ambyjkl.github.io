"use strict";

function changeBackground() {
    var today = new Date();
    var s = today.getSeconds() + today.getMilliseconds() / 1000;
    var m = today.getMinutes() + s / 60;
    var h = today.getHours() + m / 60;
    var r = Math.trunc((h < 12) ? (h * 256 / 12) : ((24 - h) * 256 / 12));
    var R = 255 - r;
    var g = Math.trunc((m < 30) ? (m * 256 / 30) : ((60 - m) * 256 / 30));
    var G = 255 - g;
    var b = Math.trunc((s < 30) ? (s * 256 / 30) : ((60 - s) * 256 / 30));
    var B = 255 - b;
    var rr = Math.trunc(Math.pow(r * R, 0.5));
    var gg = Math.trunc(Math.pow(g * G, 0.5));
    var bb = Math.trunc(Math.pow(b * B, 0.5));
    $("body").css({
        'background-image': `linear-gradient(to top,  rgb(${r},${g},${b}) 0%, rgb(${R},${G},${B}) 100%)`
    });
    document.getElementById("me").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
    document.getElementById("HyperSpace").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
    document.getElementById("ASCIInator").style.backgroundColor = `rgb(${rr},${gg},${bb})`;
}
setInterval(function() {
    changeBackground();
}, 117);

function openInNewTab(url) {
    var win = window.open(url, '_blank');
}

$(".fa-github").click(function() {
    openInNewTab("https://www.github.com/Ambyjkl");
});
$(".fa-facebook-square").click(function() {
    openInNewTab("https://www.facebook.com/ambareesh.balaji");
});
$(".fa-twitter").click(function() {
    openInNewTab("https://twitter.com/AmbareeshBalaji");
});
$(".fa-linkedin").click(function() {
    openInNewTab("https://www.linkedin.com/in/ambyjkl");
});
$(".fa-envelope-square").click(function() {
    openInNewTab("mailto:ambareeshbalaji@gmail.com");
});
$(".fa-file-pdf-o").click(function() {
    openInNewTab("resume.pdf");
});
