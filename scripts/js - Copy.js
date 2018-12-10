  // GLOBAL VARIABLES
  // global variables that update on document ready
$(document).ready(function(event){ 
  screenHeight = $(window).height(); //get viewport height
  screenWidth = $(window).width(); //get viewport width
  scrlValue = $(window).scrollTop(); //get scroll position
});

  // global variables that update on scroll
$(document).scroll(function(event){ 
  scrlValue = $(window).scrollTop(); //get scroll position
  screenHeight = $(window).height(); //get viewport height
  screenWidth = $(window).width(); //get viewport width
  scrlPositionTop = scrlValue * 1.06;  //  //get scroll position + its multiplied so it can be bigger than offset().top of the divs
  scrlPositionBottom = scrlValue + screenHeight;  //get bottom scroll position
});

// smooth scroll from menu to page
//visit home page
  $("li:nth-of-type(1) a").click(function visitHome (){    
    $('html, body').animate({ // make scroll to page smooth
        scrollTop: 0
    }, 1000);
  });

//visit skills page
$("li:nth-of-type(2) a").click(function visitSkills (){  
  if (screenWidth <= 375 ){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container2").offset().top -118
    }, 1000); 
  }
  if ((screenWidth > 375) && (screenWidth <= 620 )){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container2").offset().top -50
    }, 1000); 
  }
  if ((screenWidth > 620) && (screenWidth < 1024)){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container2").offset().top -200
    }, 1000); 
  }
  if ((screenWidth >= 1024) && (screenWidth < 1366)){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container2").offset().top -200
    }, 1000); 
  }
  if (screenWidth >= 1366 && (screenWidth < 1940)){ // use offset because of resolution
    $('html, body').animate({
      scrollTop: $(".container2").offset().top -250
    }, 1000);
  }
  if (screenWidth >= 1940){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container2").offset().top -280
    }, 1000); 
  }
});

  //visit portfolio page
 $("li:nth-of-type(3) a").click(function visitPortfolio (){
  if (screenWidth <= 499 ){ // use offset because of resolution
    $('html, body').animate({ 
      scrollTop: $(".container3").offset().top -60
    }, 1000); 
  } 
  if ((screenWidth >= 500) && (screenWidth <= 960)){ // use offset because of resolution
    $('html, body').animate({
      scrollTop: $(".container3").offset().top -70
    }, 1000);
  }
  if (screenWidth > 960 ){ // use offset because of resolution
    $('html, body').animate({
      scrollTop: $(".container3").offset().top -90
    }, 1000);
  }
});
//visit contact page
 $("li:nth-of-type(4) a").click(function visitContact (){    
    $('html, body').animate({
        scrollTop: $(".container5").offset().top +30
    }, 1000);
  });

// the select active menu effect before scroll
$(document).ready(function (event){
 if (scrlValue === 0){ 
    $("li:nth-of-type(1) a").addClass("active-menu"); // select home category
    $(".srl-position span:nth-of-type(1) a").addClass("active-scrl"); // select first cube on the nav menu left
  }
});

//header menu and side nav active effect on scroll
$(window).scroll(function (event){
  if (scrlPositionTop >= ($(".container1").offset().top)){ 
    $("li:nth-of-type(1) a").addClass("active-menu"); // select home category
    $("li:nth-of-type(2) a").removeClass("active-menu"); // deselect skills category  
    $(".srl-position span:nth-of-type(1) a").addClass("active-scrl"); // select first cube on the nav menu left
    $(".srl-position span:nth-of-type(2) a").removeClass("active-scrl"); // deselect second cube on the nav menu left

  }
  if (scrlPositionBottom >= ($(".container2").offset().top)){
    $("li:nth-of-type(1) a").removeClass("active-menu");  // deselect home category
    $("li:nth-of-type(2) a").addClass("active-menu"); // select skills category
    $("li:nth-of-type(3) a").removeClass("active-menu"); // deselect portfolio category
    $(".srl-position span:nth-of-type(1) a").removeClass("active-scrl"); // deselect first cube on the nav menu left
    $(".srl-position span:nth-of-type(2) a").addClass("active-scrl"); // select second cube on the nav menu left
    $(".srl-position span:nth-of-type(3) a").removeClass("active-scrl"); // deselect third cube on the nav menu left
  }
  if (scrlPositionTop >= ($(".container3").offset().top)){ 
    $("li:nth-of-type(2) a").removeClass("active-menu");  // deselect skills category
    $("li:nth-of-type(3) a").addClass("active-menu"); // select portfolio category
    $("li:nth-of-type(4) a").removeClass("active-menu"); // deselect contact category
    $(".srl-position span:nth-of-type(2) a").removeClass("active-scrl"); // deselect second cube on the nav menu left
    $(".srl-position span:nth-of-type(3) a").addClass("active-scrl"); // select third cube on the nav menu left
    $(".srl-position span:nth-of-type(4) a").removeClass("active-scrl"); // deselect forth cube on the nav menu left
  }
    if (scrlPositionBottom >= ($(".container5").offset().top)){ 
    $("li:nth-of-type(3) a").removeClass("active-menu");  // deselect portfolio category
    $("li:nth-of-type(4) a").addClass("active-menu"); // select contact category
    $(".srl-position span:nth-of-type(3) a").removeClass("active-scrl"); // deselect third cube on the nav menu left
    $(".srl-position span:nth-of-type(4) a").addClass("active-scrl"); // select forth cube on the nav menu left
  }
});

var animated = false; // var to prevent reloading of buddha.gif see line 159 

// the scroll efects on the main element
$(window).scroll(function intro(event){
 // console.log(scrlPositionTop + " " +scrlPositionBottom + " "  +scrlValue +  " "  +screenHeight);
  if (scrlValue < 100){ 
    $(".header").css({"background-color": "#fff"}); // make header menu solid white to mask snapping motion 
    $("div.blue-box").removeClass("blue-box-end"); // blue box width 70%
    $("p.big-txt").removeClass("big-txt-end"); // black letters hidden
    $("p.small-txt").removeClass("small-txt-end"); // show white text
    $("div.intro").addClass("intro-fixed");
    $("div.intro").removeClass("intro-static");
  }
  if (scrlValue >= 100 && scrlValue < 115){
    $("div.blue-box").addClass("blue-box-end"); // blue box width 70%
    $("p.big-txt").addClass("big-txt-end"); // black letters hidden
    $("p.small-txt").addClass("small-txt-end"); // show white text
  }
  if (scrlValue >= 116){
    $(".header").css({"background-color": ""}); //return background color to default value
    $("div.intro").addClass("intro-static");
    $("div.intro").removeClass("intro-fixed");
  }
  if (scrlValue < 700 || scrlValue > 1700){  // reload skillbar animation
    $("span.low").css({"height": ""}); //make skillbars 0%
    $("span.med").css({"height": ""}); //make skillbars 0%
    $("span.high").css({"height": ""}); //make skillbars 0%
  }
  if (scrlValue > 700 && scrlValue < 1700 && screenWidth > 700){
    $("span.low").css({"height": "40px"}); //make skillbars full
    $("span.med").css({"height": "78px"}); //make skillbars full
    $("span.high").css({"height": "116px"}); //make skillbars full
  }
  if ((scrlPositionBottom) >= ($(".container2").offset().top)){
    if (animated === false){
      $(".buddha").delay(2500).attr({"src": "images/buddha/buddha.gif"});  // show buddha .gif
      animated = true;
    }
  }
  if ((scrlPositionBottom) <= ($(".container2").offset().top)){
    $(".buddha").attr({"src": ""});  // remove buddha .gif
    animated = false; // make the buddha.gif available to restart again
  }
  if ((scrlPositionTop) > ($(".container3").offset().top)){
    animated = false; // make the buddha.gif available to restart again
  }
  if ((scrlPositionBottom) >= ($(".info-container").offset().top)){
    $(".houses-container img").removeClass("hide-houses"); // show houses on contact page
  }
  if ((scrlPositionBottom) <= ($(".info-container").offset().top)){
    $(".houses-container img").addClass("hide-houses"); // hide houses on contact page
  }
});

//portfolio slider
$(document).ready(function (event){
  $(".nav-left").click(function() {
    $(".visit a").attr("href", "");
    $(".first").addClass("active");
    $(".web-img img:nth-of-type(1)").addClass("active img-left");
    $(".second").removeClass("active");
    $(".web-img img:nth-of-type(2)").removeClass("active img-right");
  });
   $(".nav-right").click(function() {
    $(".visit a").attr("href", "http://www.slave-angelovski.com/space_elevator");
    $(".second").addClass("active");
    $(".web-img img:nth-of-type(2)").addClass("active img-right");
    $(".first").removeClass("active");
    $(".web-img img:nth-of-type(1)").removeClass("active img-left");
  });
});