window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Loading... \n'+'\n Thank you for your participation.'
}

setTimeout(function(){
   var arr=['https://www.survey-xact.dk/LinkCollector?key=6E79MXA6S232','https://www.survey-xact.dk/LinkCollector?key=4158KADPL612','https://www.survey-xact.dk/LinkCollector?key=VNG8VS22J29N','https://www.survey-xact.dk/LinkCollector?key=HNEQKT41J5C5','https://www.survey-xact.dk/LinkCollector?key=ZP5QVTDJSK15','https://www.survey-xact.dk/LinkCollector?key=3WG7MTA1UP15','https://www.survey-xact.dk/LinkCollector?key=SFGRMSA2L232','https://www.survey-xact.dk/LinkCollector?key=ESGMVXA6U11P'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);
