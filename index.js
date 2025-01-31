import{a as m,S as L,i as g}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="48520843-c7005fc601dadff0df2bc86d2",w="https://pixabay.com/api/";m.defaults.baseURL=w;const S={key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15};async function y(t,r){try{return(await m.get("",{params:{...S,q:t,page:r}})).data}catch(s){console.log(s)}}function P(t=[]){return t.map((r={})=>{const{webformatURL:s,largeImageURL:a,tags:e,likes:o,views:l,comments:h,downloads:b}=r;return`<li class="gallery-item">
        <a href="${a}">
          <div class="gallery-top">
            <img class="gallery-img" src="${s}" alt="${e}" />
          </div>
          <ul class="gallery-bottom">
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Likes</p>
              <p class="gallery-bottom-value">${o}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Views</p>
              <p class="gallery-bottom-value">${l}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Comments</p>
              <p class="gallery-bottom-value">${h}</p>
            </li>
            <li class="gallery-bottom-item">
              <p class="gallery-bottom-stat">Downloads</p>
              <p class="gallery-bottom-value">${b}</p>
            </li>
          </ul>
          </a>
        </li>`}).join("")}const E=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let n="",i=1,f=0;E.addEventListener("submit",M);d.addEventListener("click",R);const q=new L(".gallery a",{});async function M(t){t.preventDefault();const r=t.currentTarget;if(n=r.elements.searchField.value.trim(),n===""){console.log("Query cannot be empty");return}u.innerHTML="",i=1,c.classList.remove("is-hidden"),d.classList.add("is-hidden");try{const{hits:s,totalHits:a}=await y(n,i);if(f=Math.ceil(a/15),s.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(s),d.classList.remove("is-hidden")}catch(s){console.log(s)}finally{c.classList.add("is-hidden"),r.reset()}}async function R(){i+=1,c.classList.remove("is-hidden");try{const{hits:t}=await y(n,i);p(t),i>=f&&(d.classList.add("is-hidden"),g.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),$(u.firstElementChild)}catch(t){console.log(t)}finally{c.classList.add("is-hidden")}}function $(t){if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,left:0,behavior:"smooth"})}function p(t){const r=P(t);u.insertAdjacentHTML("beforeend",r),q.refresh()}
//# sourceMappingURL=index.js.map
