var e=document.querySelector("ul"),t=Array.from(e.getElementsByTagName("li")).sort(function(e,t){return parseInt(e.getAttribute("data-salary").replace(/[$,]/g,""))-parseInt(t.getAttribute("data-salary").replace(/[$,]/g,""))});e.innerHTML="",t.forEach(function(t){e.appendChild(t)});
//# sourceMappingURL=index.6e92b565.js.map
