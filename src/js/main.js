// DOM Selectors

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
    // $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 150);
    
});