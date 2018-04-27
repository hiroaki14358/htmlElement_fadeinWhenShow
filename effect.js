$(function(){

    console.log('あああ');
    
    $('.effect').css("opacity","0");
    $(window).scroll(function (){
      $(".effect").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).css("opacity","1" );
          $(this).css("top","-100px" );
        } else {
          $(this).css("opacity","0" );
          $(this).css("top","100px" );
        }
      });
    });
  });