import{i as f,a as y}from"./assets/vendor-B9-djN47.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const m=document.querySelector(".menu"),l=document.querySelector("menu-list");m.addEventListener("click",p);document.addEventListener("click",v);function p(e){e.preventDefault(),l.classList.toggle("show"),document.querySelectorAll(".menu-list a").forEach(r=>{r.addEventListener("click",u)})}function v(e){!m.contains(e.target)&&!l.contains(e.target)&&l.classList.remove("show")}function u(e){e.preventDefault();const o=e.target.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"}),l.classList.remove("show")}const c={formEl:document.querySelector(".js-work-together-form"),modalEl:document.querySelector(".js-modal-backdrop"),closeModalBtn:document.querySelector(".close-modal")};function L(e,o){return y.post("https://portfolio-js.b.goit.study/api/requests",{email:e,comment:o})}async function h(e){e.preventDefault();const{email:{value:o},comment:{value:r}}=e.currentTarget.elements;try{const{data:{title:s,message:t}}=await L(o,r);document.querySelector(".js-modal-title").textContent=s,document.querySelector(".js-modal-text").textContent=t,b(),c.formEl.reset()}catch(s){f.info({title:s.name,message:s.message,backgroundColor:"#ed3b44",theme:"dark"})}}function b(){c.modalEl.classList.add("is-open"),document.body.style.overflow="hidden"}function d(){c.modalEl.classList.remove("is-open"),document.body.style.overflow=""}c.formEl.addEventListener("submit",h);c.closeModalBtn.addEventListener("click",d);c.modalEl.addEventListener("click",d);document.addEventListener("keydown",e=>{e.key==="Escape"&&d()});const g=document.querySelector(".menu-button"),i=document.querySelector(".mobile-menu"),E=document.querySelector(".mobile-button"),k=document.querySelectorAll(".mob-menu-list a"),q=document.querySelector(".mob-order");g.addEventListener("click",w);E.addEventListener("click",O);k.forEach(e=>{e.addEventListener("click",o=>{u(o),i.classList.remove("show")})});q.addEventListener("click",S);function S(e){u(e),i.classList.remove("show")}function w(e){e.preventDefault(),i.classList.add("show")}function O(e){e.preventDefault(),i.classList.remove("show")}
//# sourceMappingURL=index.js.map
