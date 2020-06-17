window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Loading... \n'+'\n Thank you for your participation.'
}

setTimeout(function(){
   var arr=['https://www.reddit.com/','http://www.google.com','https://www.ku.dk/english/','https://github.com/','https://www.netflix.com/','https://www.nemlig.com/'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);