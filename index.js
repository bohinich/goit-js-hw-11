import{a as u,S as f,i as d}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="49365626-6bf9b0bb5948f971197bdaec6",m="https://pixabay.com/api/";async function y(s){try{return(await u.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a");function g(){l.style.display="block"}function b(){l.style.display="none"}function L(){c.innerHTML=""}function w(s){if(s.length===0){d.error({title:"Oops!",message:"Sorry, no images found. Try again!",position:"topRight"});return}const t=s.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" />
            <div class="info">
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
            </div>
        </a>
    `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}const a=document.querySelector(".form"),S=a.querySelector("input[name='search-text']");a.addEventListener("submit",async s=>{s.preventDefault();const t=S.value.trim();if(t!==""){L(),g();try{const r=await y(t);w(r)}catch(r){console.error("Search error:",r)}finally{b()}a.reset()}});
//# sourceMappingURL=index.js.map
