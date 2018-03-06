// $(window).scroll(function () {
//     //current scrolling position
//     var wScroll = $(this).scrollTop();
//     console.log(wScroll)
//     if (wScroll >  $('#section2').offset().top - $(window).height() && wScroll < 664) {
//         $('#section1').css({'top': wScroll});
//         $('#section2, #section3, #section4, #section5, footer').css({'top': -wScroll/2});
//
//         if( !$('header').get(0).classList.contains('navbar-inverse') ){
//             $('#header').addClass('navbar-inverse');
//         }
//     }
//     if( wScroll >= 354){
//         $('#header').addClass('navbar-default');
//         $('#header').removeClass('navbar-inverse');
//     }
// });