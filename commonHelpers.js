import{i as a,S as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=i=>{const s=new URLSearchParams({key:"43292440-b0b2b94cbd69ec3f0dfdb5c21",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),t=document.querySelector(".loader"),o=`https://pixabay.com/api/?${s}`;return t.classList.remove("is-hidden"),fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{const r=e.hits;return r.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),t.classList.add("is-hidden"),r}).catch(e=>(console.error("Error fetching images:",e),null))},p=i=>i.map(({webformatURL:s,largeImageURL:t,tags:o,likes:e,views:r,comments:n,downloads:c})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${o}"
        />
      </a>
      <ul class="list-jopa">
        <li class="jopa">
          <h3>Likes</h3>
          <p>${e}</p>
        </li>
        <li class="jopa">
          <h3>Views</h3>
          <p>${r}</p>
        </li>
        <li class="jopa">
          <h3>Comments</h3>
          <p>${n}</p>
        </li>
        <li class="jopa">
          <h3>Downloads</h3>
          <p>${c}</p>
        </li>
      </ul>
    </li>
    `).join(""),h=new l(".gallery a",{captionsData:"alt",captionDelay:250,disableRightClick:!0}),d=document.querySelector(".form");d.addEventListener("submit",i=>{i.preventDefault();const t=document.querySelector("input").value.trim();if(t===""){a.warning({title:"",message:"Please enter a search query",position:"topCenter"});return}u(t).then(o=>{if(o){const e=document.querySelector(".gallery");e.innerHTML="",e.innerHTML=p(o),h.refresh()}})});
//# sourceMappingURL=commonHelpers.js.map
