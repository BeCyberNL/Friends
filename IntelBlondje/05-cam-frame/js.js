window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData;
  document.getElementById('label').textContent=f.label;
});
