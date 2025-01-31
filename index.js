import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="48520843-c7005fc601dadff0df2bc86d2",g="https://pixabay.com/api/",p={key:d,image_type:"photo",orientation:"horizontal",safesearch:!0};function y(s){const o=new URLSearchParams({...p,q:s});return fetch(`${g}?${o}`).then(r=>{if(r.ok===!1)throw new Error(r.message);return r.json()}).catch(r=>{console.log(r)})}function h(s=[]){return s.map((o={})=>{const{webformatURL:r,largeImageURL:l,tags:e,likes:t,views:a,comments:n,downloads:m}=o;return`<li class="gallery-item">
        <a href="${l}">
          <div class="gallery-top">
            <img class="gallery-img" src="${r}" alt="${e}" />
          </div>
          <ul class="gallery-bottom">
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Likes</p>
              <p class="gallery-bottom-value">${t}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Views</p>
              <p class="gallery-bottom-value">${a}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Comments</p>
              <p class="gallery-bottom-value">${n}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Downloads</p>
              <p class="gallery-bottom-value">${m}</p>
            </li>
          </ul>
          </a>
        </li>`}).join("")}const b=document.querySelector(".search-form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader");b.addEventListener("submit",v);const L=new u(".gallery a",{});function v(s){s.preventDefault();const o=s.currentTarget,r=o.elements.searchField.value.trim();if(r===""){console.log("Query cannot be empty");return}i.innerHTML="",c.classList.remove("is-hidden"),y(r).then(l=>{l.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const e=h(l.hits);i.insertAdjacentHTML("beforeend",e),L.refresh()}).finally(()=>{c.classList.add("is-hidden"),o.reset()})}
//# sourceMappingURL=index.js.map
