(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // barra de progreso
  var bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
  function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  // cursor parpadeante en la terminal
  var tb=document.querySelector('.term .body');
  if(tb){var c=document.createElement('span');c.className='cursor';tb.appendChild(c);}
  if(reduce||!('IntersectionObserver' in window))return;
  // aparición al hacer scroll, escalonada
  var groups=['.cell','.shots figure','.panel','.term','.legal h2','.legal p','.legal ul'];
  groups.forEach(function(sel){
    document.querySelectorAll(sel).forEach(function(el,i){
      el.classList.add('reveal');
      el.style.transitionDelay=Math.min(i%6,5)*70+'ms';
    });
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  });},{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
