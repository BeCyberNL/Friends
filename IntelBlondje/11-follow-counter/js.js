var current=0;
function render(){document.getElementById('count').textContent=current.toLocaleString('nl-NL');}
window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData, s=obj.detail.session.data;
  document.getElementById('label').textContent=f.label;
  var sess=s['follower-total'];
  if(sess&&sess.count!==undefined)current=parseInt(sess.count)||0;
  else current=parseInt(f.startValue)||0;
  render();
});
window.addEventListener('onEventReceived', function(obj){
  if(obj.detail.listener!=='follower-latest')return;
  current+=1;render();
});
