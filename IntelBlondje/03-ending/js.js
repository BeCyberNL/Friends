window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData;
  document.getElementById('scene').style.background=f.bgColor;
  document.getElementById('title').textContent=f.title.replace('\\n','\n');
  document.getElementById('tagline').textContent=f.tagline;
  document.getElementById('badge1').textContent=f.badge1;
  document.getElementById('badge2').textContent=f.badge2;
});
