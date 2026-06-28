import{a as l,S as d,i as c}from"./assets/vendor-CVWx-W0A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";function p(o){const s="56406455-6dc399abae623877bee600229",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return l.get(`?${i}`).then(r=>r.data)}const u=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> <br/> ${t}</p>
          <p class="info-item"><b>Views</b> <br/> ${n}</p>
          <p class="info-item"><b>Comments</b> <br/> ${f}</p>
          <p class="info-item"><b>Downloads</b> <br/> ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),h.refresh()}function y(){u.innerHTML=""}function b(){a&&(a.classList.add("is-active"),a.classList.remove("is-hidden"))}function L(){a&&(a.classList.remove("is-active"),a.classList.add("is-hidden"))}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(o){o.preventDefault();const s=o.currentTarget,i=s.elements["search-text"].value.trim();if(i===""){c.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y(),b(),p(i).then(r=>{if(r.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.hits)}).catch(r=>{console.error(r),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),s.reset()})}
//# sourceMappingURL=index.js.map
