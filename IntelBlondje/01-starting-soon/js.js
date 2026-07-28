window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData, s=obj.detail.session.data;
  document.getElementById('scene').style.background=f.bgColor;
  document.getElementById('title').textContent=f.title;
  document.getElementById('tagline').textContent=f.tagline;
  if(f.logo){var l=document.getElementById('logo');l.src=f.logo;l.style.display='block';}
  if(s['subscriber-latest']&&s['subscriber-latest'].name)document.getElementById('latest-sub').textContent=s['subscriber-latest'].name;
  if(s['follower-latest']&&s['follower-latest'].name)document.getElementById('latest-follower').textContent=s['follower-latest'].name;
});
window.addEventListener('onEventReceived', function(obj){
  var l=obj.detail.listener,e=obj.detail.event;
  if(l==='subscriber-latest')document.getElementById('latest-sub').textContent=e.name;
  if(l==='follower-latest')document.getElementById('latest-follower').textContent=e.name;
});
