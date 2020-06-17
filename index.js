window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Thank you for your participation.'
}

setTimeout(function(){
   var arr=['http://www.baidu.com','http://www.google.com','http://www.taobao.com'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);