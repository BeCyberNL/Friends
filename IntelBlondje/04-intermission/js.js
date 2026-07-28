window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData;
  document.getElementById('scene').style.background=f.bgColor;
  document.getElementById('title').textContent=f.title;
  document.getElementById('pretext').textContent=f.pretext;
  document.getElementById('posttext').textContent=f.posttext;
  if(f.logo){var l=document.getElementById('logo');l.src=f.logo;l.style.display='block';}
  var items=(f.tickerItems||'').split(',').map(function(s){return s.trim();}).filter(Boolean);
  var track=document.getElementById('ticker');
  items.concat(items).forEach(function(t){var sp=document.createElement('span');sp.textContent=t;track.appendChild(sp);});
  var secs=Math.round((parseFloat(f.minutes)||5)*60);
  var el=document.getElementById('timer');
  function fmt(){var m=Math.floor(secs/60),s=secs%60;el.textContent=('0'+m).slice(-2)+':'+('0'+s).slice(-2);}
  fmt();
  setInterval(function(){ if(secs>0){secs--;fmt();} else {el.textContent=f.doneText;} },1000);
});
