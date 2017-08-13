'use strict';

(function () {
  var partyMode = false;
  var intervalDuration = 117;
  var animationFrame;

  var body = document.body;
  var me = document.getElementById('me')
  var HyperSpace = document.getElementById('HyperSpace');
  var ASCIInator = document.getElementById('ASCIInator');

  function changeBackground() {
    var r, g, b;
    if (partyMode) {
      r = ~~(Math.random() * 256);
      g = ~~(Math.random() * 256);
      b = ~~(Math.random() * 256);
    } else {
      var today = new Date();
      var s = today.getSeconds() + today.getMilliseconds() / 1000;
      var m = today.getMinutes() + s / 60;
      var h = today.getHours() + m / 60;
      r = ~~(h < 12 ? h * 256 / 12 : (24 - h) * 256 / 12);
      g = ~~(m < 30 ? m * 256 / 30 : (60 - m) * 256 / 30);
      b = ~~(s < 30 ? s * 256 / 30 : (60 - s) * 256 / 30);
    }

    var R = g;
    var G = b;
    var B = r;
    var rr = ~~Math.sqrt((r * r + R * R) / 2);
    var gg = ~~Math.sqrt((g * g + G * G) / 2);
    var bb = ~~Math.sqrt((b * b + B * B) / 2);

    body.style.backgroundImage = 'linear-gradient(rgb(' + R + ',' + G + ',' + B + '),' + 'rgb(' + r + ',' + g + ',' + b + '))';
    body.style.filter = 'progid:DXImageTransform.Microsoft.Gradient(startColorstr="rgb(' + R + ',' + G + ',' + B + ')", endColorstr="rgb(' + r + ',' + g + ',' + b + ')")';
    me.style.background = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
    HyperSpace.style.background = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
    ASCIInator.style.background = 'rgb(' + rr + ',' + gg + ',' + bb + ')';

    if (partyMode) {
      animationFrame = requestAnimationFrame(changeBackground);
    }
  }

  var interval = setInterval(changeBackground, intervalDuration);

  var party = document.getElementById('party');
  party.style.visibility = 'hidden';

  me.onclick = function () {
    partyMode = !partyMode;
    if (partyMode) {
      party.style.visibility = null;
      clearInterval(interval);
      animationFrame = requestAnimationFrame(changeBackground);
    } else {
      party.style.visibility = 'hidden';
      cancelAnimationFrame(animationFrame);
      interval = setInterval(changeBackground, intervalDuration);
    }
  };
})();
