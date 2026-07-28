var f,hideTimer;
function show(title,msg,color){
  document.getElementById('atitle').textContent=title;
  document.getElementById('amsg').textContent=msg;
  document.getElementById('aicon').style.background=color;
  var a=document.getElementById('alert');
  a.classList.add('show');
  clearTimeout(hideTimer);
  hideTimer=setTimeout(function(){a.classList.remove('show');},(parseFloat(f.duration)||6)*1000);
}
window.addEventListener('onWidgetLoad', function(obj){ f=obj.detail.fieldData; });
window.addEventListener('onEventReceived', function(obj){
  var l=obj.detail.listener,e=obj.detail.event;
  if(!f||!e)return;
  if(l==='follower-latest')show(f.followTitle,f.followMsg.replace('{name}',e.name),'#C7B6F2');
  else if(l==='subscriber-latest')show(f.subTitle,f.subMsg.replace('{name}',e.name),'#8B72D8');
  else if(l==='tip-latest')show(f.tipTitle,f.tipMsg.replace('{name}',e.name).replace('{amount}',(e.amount||0)+''),'#F6D98F');
});
