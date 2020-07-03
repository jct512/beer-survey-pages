window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Loading... \n'+'\n Thank you for your participation.'
}

setTimeout(function(){
   var arr=['https://www.survey-xact.dk/LinkCollector?key=EAGFKW21LP3N','https://www.survey-xact.dk/LinkCollector?key=EELETAD2S29N','https://www.survey-xact.dk/LinkCollector?key=M2G9TXD2J216','https://www.survey-xact.dk/LinkCollector?key=QWEETF4NUJ11','https://www.survey-xact.dk/LinkCollector?key=N65WMXDKLN1K','https://www.survey-xact.dk/LinkCollector?key=AN7ST9AJJJ9N','https://www.survey-xact.dk/LinkCollector?key=85EETEAKLN91','https://www.survey-xact.dk/LinkCollector?key=AAGEVS22J23J','https://www.survey-xact.dk/LinkCollector?key=KE7EK9A6UK9J','https://www.survey-xact.dk/LinkCollector?key=6E79MXA6S232'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);