// javascriptでは、引数の中に関数を入れることができる。
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになる。
// よってslideDownの中のfunctionに、cssとslideUpの記述を書くことにより、要件を満たすことができる。
$(function(){
  $('.box1').slideDown(2000,function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'width':'200px',
      'height':'100px'
    }).slideUp(2000);
  });
});