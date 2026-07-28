var current=0,target=100,prefix='';
function render(){
  document.getElementById('cur').textContent=prefix+(Math.round(current*100)/100);
  document.getElementById('target').textContent=prefix+target;
  document.getElementById('fill').style.width=Math.min(100,(current/target)*100)+'%';
}
window.addEventListener('onWidgetLoad', function(obj){
  var f=obj.detail.fieldData, s=obj.detail.session.data;
  target=parseFloat(f.goal)||100; prefix=f.prefix||'';
  document.getElementById('label').textContent=f.label;
  var auto=(f.auto===true||f.auto==='true');
  var sess=s['tip-session'];
  if(auto&&sess&&sess.amount!==undefined){ current=parseFloat(sess.amount)||0; }
  else { current=parseFloat(f.startValue)||0; }
  render();
});
window.addEventListener('onEventReceived', function(obj){
  if(obj.detail.listener!=='tip-latest')return;
  current+=parseFloat(obj.detail.event.amount)||0;
  render();
});
