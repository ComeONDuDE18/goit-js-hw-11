import{i as d,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="47549535-932fbadf252bf563d10ac391d",y="https://pixabay.com/api/";function p(o){const a=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function b(o){return o.map(({largeImageURL:t,webformatURL:i,tags:e,likes:r,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="image-thumbnail"
            src="${i}"
            alt="${e}"
            loading="lazy"
          />
          <div class="image-info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${m}</p>
          </div>
        </a>
      </li>`).join("")}function n(o){d.error({title:"Error",message:o,position:"topRight"})}const L=document.querySelector(".search-form"),u=document.querySelector(".gallery"),q=document.querySelector(".loader");let c;function l(o){q.classList.toggle("hidden",!o)}function P(){u.innerHTML=""}L.addEventListener("submit",async o=>{o.preventDefault();const a=o.target.elements["search-query"].value.trim();if(!a){n("Please enter a search query!");return}P(),l(!0);try{const t=await p(a);if(l(!1),t.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}u.innerHTML=b(t.hits),c?c.refresh():c=new h(".gallery a",{captionsData:"alt",captionDelay:250})}catch(t){l(!1),console.error("Error fetching images:",t),n("Sorry, there are no images matching your search query. Please try again!")}});
//# sourceMappingURL=index.js.map
