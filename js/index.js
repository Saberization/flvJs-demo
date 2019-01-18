(function () {
  'use strict';

  var videoElement = document.getElementById('videoElement');

  if (flvjs.isSupported()) {
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      isLive: 'true',
      url: 'rtmp://192.168.115.28:1935/hls/test.flv'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load(); //加载
  }

  window.flv_start = function flv_start() {
    player.play();
  }

  window.flv_pause = function flv_pause() {
    player.pause();
  }

  window.flv_pause = function flv_destroy() {
    player.pause();
    player.unload();
    player.detachMediaElement();
    player.destroy();
    player = null;
  }

  window.flv_pause = function flv_seekto() {
    player.currentTime = parseFloat(document.getElementsByName('seekpoint')[0].value);
  }
}());