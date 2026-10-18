(function(){var h=document.documentElement,b=document.querySelectorAll('.lang button');
function set(l){h.classList.remove('l-es','l-en');h.classList.add('l-'+l);h.lang=l;
b.forEach(function(x){x.setAttribute('aria-pressed',x.dataset.l===l)});try{localStorage.setItem('sgfp-l',l)}catch(e){}}
var l=(location.hash==='#en')?'en':(location.hash==='#es')?'es':null;
try{l=l||localStorage.getItem('sgfp-l')}catch(e){}
l=l||((navigator.language||'es').slice(0,2)==='en'?'en':'es');set(l);
b.forEach(function(x){x.addEventListener('click',function(){set(x.dataset.l)})});})();
