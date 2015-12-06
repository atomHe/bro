var phrases = [ 
'Привлекаем клиентов в ваш бизнес', 
'Разрабатываем маркетинговую стратегию', 
'Налаживаем партнерские отношения с клиентами' 
], 
phrasesIndex = -1, 
phrasesDirection = true; 

$(document).ready(function() {
  var start = Date.now(),
      ends;
  setInterval(function () {
    var w = $('#line').width();
    if (w == 0) {
      start = Date.now();
      increaseLine();
    } else {
      ends=Date.now()-start;
      if (ends<=3800)
        return;
      if (ends>6000)
        return;
      reduceLine();
    }
  },500);


});

function increaseLine () {
  $('#line').animate({
    width: '300px'
  }, 4000);
  $('#line').css('opacity','1');
}

function reduceLine () {
  $('#line').animate({
    width: '0px'
  }, 300);
  $('#line').css('opacity', '0');
  if (phrasesDirection)
    phrasesIndex++;
  else
    phrasesIndex--;
  if (phrasesIndex==phrases.length) {
    phrasesIndex--;
    phrasesIndex--;
    phrasesDirection=false;
  }
  if (phrasesIndex==0)
    phrasesDirection=true;
  $('#title-index').text(phrases[phrasesIndex]);
}