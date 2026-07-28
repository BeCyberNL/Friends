var maxMsgs=50;
window.addEventListener('onWidgetLoad', function(obj){
  document.getElementById('chathead').textContent=obj.detail.fieldData.title;
});
window.addEventListener('onEventReceived', function(obj){
  if(obj.detail.listener!=='message')return;
  var d=obj.detail.event.data;
  var div=document.createElement('div');div.className='msg';
  var name=document.createElement('span');name.className='name';
  name.textContent=d.displayName;
  name.style.color=d.displayColor||'#5F4BA8';
  div.appendChild(name);
  div.appendChild(document.createTextNode(' '+d.text));
  var box=document.getElementById('log');
  box.appendChild(div);
  while(box.children.length>maxMsgs)box.removeChild(box.firstChild);
});
