window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData;
  document.getElementById('scene').style.background=f.bgColor;
  document.getElementById('title').textContent=f.title;
  document.getElementById('tagline').textContent=f.tagline;
});
