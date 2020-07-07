window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Loading... \n'+'\n Thank you for your participation.'
}

setTimeout(function(){
   var arr=['https://www.survey-xact.dk/LinkCollector?key=6E79MXA6S232','https://www.survey-xact.dk/LinkCollector?key=5RNGVS45LN3P','https://www.survey-xact.dk/LinkCollector?key=Y3QDMXDNJ63J','https://www.survey-xact.dk/LinkCollector?key=DRNCMW41S136','https://www.survey-xact.dk/LinkCollector?key=KRQZTT2JU216','https://www.survey-xact.dk/LinkCollector?key=FRYDMTANSP1N','https://www.survey-xact.dk/LinkCollector?key=CKDVVFA1SJC2','https://www.survey-xact.dk/LinkCollector?key=YP4UVS4PL5CK','https://www.survey-xact.dk/LinkCollector?key=KJDYKXDKSP1J'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);
