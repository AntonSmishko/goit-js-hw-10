import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),o=document.querySelector("#datetime-picker");n.addEventListener("click",v);let c=null,e=null;n.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],console.log(e),E()}};f(o,g);function E(){if(e<Date.now())return h.error({position:"topRight",message:"Please choose a date in the future"});n.disabled=!1}function q(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:l,seconds:m}}function v(){o.disabled=!0,n.disabled=!0,c=setInterval(D,1e3)}function D(){const t=e-new Date;if(t<=0){o.disabled=!1,clearInterval(c);return}const{days:r,hours:a,minutes:s,seconds:d}=q(t);y.textContent=String(r).padStart(2,0),S.textContent=String(a).padStart(2,0),p.textContent=String(s).padStart(2,0),b.textContent=String(d).padStart(2,0)}
//# sourceMappingURL=1-timer.js.map
