(function(){"use strict";function a(){const n="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget-staging/",d=document.createElement("div");d.id="magma-app",document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>document.body.appendChild(d)):document.body.appendChild(d);const t=document.createElement("link");t.href=`${n}index.css`,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t);const e=document.createElement("script");e.src=`${n}index.js`,e.async=!0,e.onload=()=>{console.log("Magma widget script loaded successfully.")},e.onerror=()=>{console.error("Error loading the Magma widget script.")},document.body.appendChild(e)}a()})();
