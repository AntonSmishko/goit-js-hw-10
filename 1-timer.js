import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f}from"./assets/vendor-EyZmBGcZ.js";const n=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]"),o=document.querySelector("#datetime-picker");n.addEventListener("click",v);let s=null,e=null;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],console.log(e),E()}};f(o,b);function E(){e<Date.now()&&window.alert("Please choose a date in the future"),n.disabled=!1}function q(t){const u=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:i,seconds:m}}function v(){o.disabled=!0,n.disabled=!0,s=setInterval(D,1e3)}function D(){const t=e-new Date;if(t<=0){o.disabled=!1,clearInterval(s);return}const{days:r,hours:a,minutes:d,seconds:c}=q(t);h.textContent=String(r).padStart(2,0),y.textContent=String(a).padStart(2,0),S.textContent=String(d).padStart(2,0),p.textContent=String(c).padStart(2,0)}
//# sourceMappingURL=1-timer.js.map
