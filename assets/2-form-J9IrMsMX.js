import"./modulepreload-polyfill-9p4a8sJU.js";/* empty css              */const r=document.querySelector(".feedback-form"),e=r.elements.email,t=r.elements.message,a=JSON.parse(localStorage.getItem("feedback-form-state"))?JSON.parse(localStorage.getItem("feedback-form-state")):"";e.value=a?a.email:"";t.value=a?a.message:"";e.addEventListener("focus",()=>{e.getAttribute("style")&&(e.removeAttribute("style"),e.removeAttribute("placeholder"))});t.addEventListener("focus",()=>{t.getAttribute("style")&&(t.removeAttribute("style"),t.removeAttribute("placeholder"))});r.addEventListener("input",()=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:e.value.trim(),message:t.value.trim()}))});r.addEventListener("submit",o=>{if(!e.value){o.preventDefault(),e.setAttribute("style","border-color: tomato"),e.setAttribute("placeholder","E-mail is required to proceed");return}if(!t.value){o.preventDefault(),t.setAttribute("style","border-color: tomato"),t.setAttribute("placeholder","Message is required to proceed");return}o.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),r.reset()});
