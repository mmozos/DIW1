var e=document.querySelector(".player"),t=document.querySelector("#video"),n=document.querySelector("#control-play"),r=document.querySelector("#control-stop"),c=document.querySelector("#control-volume"),s=document.querySelector(".volume-slider"),o=document.querySelector(".volume-filled"),u=document.querySelector(".progress"),l=document.querySelector(".progress-filled"),i=document.querySelector(".time-current"),a=document.querySelectorAll(".speed-item"),d=document.querySelector("#control-fullscreen"),m=1;function v(e){e.preventDefault(),t.paused?t.play():t.pause()}function f(){t.paused?n.textContent="play_arrow":n.textContent="pause"}function p(e){e>.5?c.textContent="volume_up":e<.5&&e>0?c.textContent="volume_down":0===e&&(c.textContent="volume_mute")}function k(e){var t=Math.floor(e%60);return t=t>9?t:"0".concat(t),"".concat(Math.floor(e%3600/60),":").concat(t)}var y=!1;function x(){t.playbackRate=this.dataset.speed,a.forEach(function(e){return e.classList.remove("active")}),this.classList.add("active")}n.addEventListener("click",v),r.addEventListener("click",function(e){e.preventDefault(),t.pause(),t.currentTime=0}),t.addEventListener("click",v),t.addEventListener("play",f),t.addEventListener("pause",f),t.addEventListener("ended",f),t.addEventListener("timeupdate",function(){l.style.width="".concat(t.currentTime/t.duration*100,"%"),i.innerHTML="".concat(k(t.currentTime)," / ").concat(k(t.duration))}),c.addEventListener("click",function(e){e.preventDefault(),t.volume?(m=t.volume,t.volume=0,c.textContent="volume_mute",o.style.width="0"):(t.volume=m,p(t.volume),o.style.width="".concat(100*t.volume,"%"))}),s.addEventListener("click",function(e){var n=e.offsetX/s.offsetWidth;n<.1&&(n=0),o.style.width="".concat(100*n,"%"),t.volume=n,p(n),m=n}),u.addEventListener("click",function(e){var n=e.offsetX/u.offsetWidth;l.style.width="".concat(100*n,"%"),t.currentTime=n*t.duration}),d.addEventListener("click",function(t){(t.preventDefault(),y)?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),d.textContent="fullscreen"):(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),d.textContent="fullscreen_exit"),y=!y}),a.forEach(function(e){e.addEventListener("click",x)}),window.addEventListener("keydown",function(e){switch(e.key){case" ":v(new Event("click"));break;case"ArrowRight":t.currentTime+=5;break;case"ArrowLeft":t.currentTime-=5}});var h=document.getElementById("mp4"),E=document.getElementById("webm"),b=document.getElementById("selected"),w="",q="";function L(e){switch(e){case 1:w="https://fredrickjaxx.is/_assets/video/blossoms.mp4",q="https://fredrickjaxx.is/_assets/video/blossoms.Webm";break;case 2:w="https://fredrickjaxx.is/_assets/video/splash.mp4",q="https://fredrickjaxx.is/_assets/video/splash.Webm";break;case 3:w="https://fredrickjaxx.is/_assets/video/transport.mp4",q="https://fredrickjaxx.is/_assets/video/transport.Webm";break;case 4:w="https://fredrickjaxx.is/_assets/video/walking.mp4",q="https://fredrickjaxx.is/_assets/video/walking.Webm"}h.setAttribute("src",w),E.setAttribute("src",q),b.setAttribute("value",e),t.load(),t.play()}document.getElementById("control-previous").addEventListener("click",function(e){e.preventDefault();var t=parseInt(b.getAttribute("value"));L(1===t?4:t-1)}),document.getElementById("control-next").addEventListener("click",function(e){e.preventDefault();var t=parseInt(b.getAttribute("value"));L(4===t?1:t+1)});
//# sourceMappingURL=play.8e328f84.js.map
