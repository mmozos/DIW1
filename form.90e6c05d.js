var t=function(t){for(var e=window.location.search.substring(1).split("&"),r=0;r<e.length;r++){var a=e[r].split("=");if(decodeURIComponent(a[0])===t)return decodeURIComponent(a[1])}return!1},e=function(t,e,r){var a,n="",o=t.split("?"),s=o[0],i=o[1],d="";if(i){var l=i.split("#"),c=l[0];(a=l[1])&&(i=c),o=i.split("&");for(var b=0;b<o.length;b++)o[b].split("=")[0]!==e&&(n+=d+o[b],d="&")}else{var u=s.split("#"),v=u[0];a=u[1],v&&(s=v)}return a&&(r+="#"+a),s+"?"+n+(d+""+e)+"="+r},r=function(r){var n=document.querySelector(".navbar"),o=t("t");if(o)for(var s in a)if(a[s]===o)document.body.classList.remove("bg-"+o),n.classList.remove("bg-"+o,"navbar-"+o);else{o=a[s],document.body.classList.add("bg-"+o),n.classList.add("bg-"+o,"navbar-"+o);break}else o="light",document.body.classList.remove("bg-dark"),n.classList.remove("bg-dark","navbar-dark"),document.body.classList.add("bg-light"),n.classList.add("bg-light","navbar-light");darkmode.inDarkMode="dark"===o,r.href=e(window.location.href,"t",o),document.querySelector(".logo").textContent="dark"===o?"nights_stay":"wb_sunny"},a=["dark","light"],n=document.querySelector(".invert_color");n.addEventListener("click",function(t){return r(t.target)}),r(n);
//# sourceMappingURL=form.90e6c05d.js.map
