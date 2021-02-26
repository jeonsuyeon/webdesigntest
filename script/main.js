/*main.js*/


/* $(function(){
    2depth 메뉴 액션*/
  /*  $('#gnb > ul > li').hover(
    function(){
        //마우스호버
        $(this)
            .find('.depth2')
            .addClass('show');     
    },
      function(){
          //마우스아웃
          $(this) 
            .find('.depth2')
        .removeClass('show');
      }  
    )
}); //end $ */


$(function(){
    /*2depth 메뉴 액션*/
    $('#gnb > ul > li').hover(
    function(){
        //마우스호버
         $('#gnb > ul > li')
            .find('.depth2')
            .addClass('show');     
    },
      function(){
          //마우스아웃
        $('#gnb > ul > li')
            .find('.depth2')
            .removeClass('show');
      }  
    )
}); //end $

$(function(){
    var top = 0; //slider 위치
    var duration=3000; //인터벌시간
 //마지막 이미지 위치 확인
    setInterval(function(){
        if(top <= -900) {
            top = 0; //처음 이미지 위치
        }
        $('.sliders').animate({
            marginTop: top +'px'
        });
        top = top -300;
    }, duration);
});

/* tab menu */
$(function(){
   $('.tab_group a').first().on('click', function(){
       /* 기존 콘텐츠 제거 */
       $('.tab_content').removeClass('show');
       /* 현재 콘틴츠 표시 */
       $('#notice').addClass('show');
   });
    
   $('.tab_group a').last().on('click', function(){
       /* 기존 콘텐츠 제거 */
       $('.tab_content').removeClass('show');
       /* 현재 콘틴츠 표시 */
       $('#gallery').addClass('show');
   });    
    
});
