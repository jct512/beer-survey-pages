window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Loading... \n'+'\n Thank you for your participation.'
}

setTimeout(function(){
   var arr=['https://www.survey-xact.dk/LinkCollector?key=6E79MXA6S232','https://www.survey-xact.dk/LinkCollector?key=5RNGVS45LN3P','https://www.survey-xact.dk/LinkCollector?key=Y3QDMXDNJ63J','https://www.survey-xact.dk/LinkCollector?key=DRNCMW41S136','https://www.survey-xact.dk/LinkCollector?key=KRQZTT2JU216','https://www.survey-xact.dk/LinkCollector?key=FRYDMTANSP1N','https://www.survey-xact.dk/LinkCollector?key=CKDVVFA1SJC2','https://www.survey-xact.dk/LinkCollector?key=YP4UVS4PL5CK','https://www.survey-xact.dk/LinkCollector?key=KJDYKXDKSP1J','https://www.survey-xact.dk/LinkCollector?key=3ME46TD2J115','https://www.survey-xact.dk/LinkCollector?key=LGCGF9APLNC5','https://www.survey-xact.dk/LinkCollector?key=EH9C6E26UK9J','https://www.survey-xact.dk/LinkCollector?key=QY1G6925L13P','https://www.survey-xact.dk/LinkCollector?key=DU9H6EANU11P','https://www.survey-xact.dk/LinkCollector?key=KC1G8W25UP11','https://www.survey-xact.dk/LinkCollector?key=6Z1V8X2KU135'];
  window.location.href=arr[parseInt(Math.random()*arr.length)];
  },100);
