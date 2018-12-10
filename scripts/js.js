

  // global variables that update on document ready

  screenHeight = $(window).height(); //get viewport height
  screenWidth = $(window).width(); //get viewport width
  scrlValue = $(window).scrollTop(); //get scroll position


// global variables that update on scroll

// SHORTEN SELECTORS
function query(className) {
 return document.querySelector(className);
}
function queryAll(className) {
 return document.querySelectorAll(className);
}
function id(idName) {
 return document.getElementById(idName);
}
function tag(tagName) {
 return document.getElementsByTagName(tagName);
}
function addClass(fromClass, addClass) {
 return queryAll(fromClass).forEach(function(element) {
    element.classList.add(addClass);
    });
}
function removeClass(fromClass, removeClass) {
 return queryAll(fromClass).forEach(function(element) {
    element.classList.remove(removeClass);
    });
}

//PRELOAD IMAGES
document.addEventListener("DOMContentLoaded", function(event) {
  var images = new Array();
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }
  preload (
    "images/web1.jpg",
    "images/web2.jpg",
    "images/web3.jpg"
  );
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
      scrollTop: $(".container4").offset().top -60
    }, 1000); 
  } 
  if ((screenWidth >= 500) && (screenWidth <= 960)){ // use offset because of resolution
    $('html, body').animate({
      scrollTop: $(".container4").offset().top -70
    }, 1000);
  }
  if (screenWidth > 960 ){ // use offset because of resolution
    $('html, body').animate({
      scrollTop: $(".container4").offset().top -90
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
  let scrlValue = $(window).scrollTop();
 if (scrlValue === 0){ 
    $("li:nth-of-type(1) a").addClass("active-menu"); // select home category
    $(".srl-position span:nth-of-type(1) a").addClass("active-scrl"); // select first cube on the nav menu left
  }
});

var animated = false; // var to prevent reloading of buddha.gif see line 181 
function allFx(event){
  let scrlValue = $(window).scrollTop(); //get scroll position
  let screenHeight = $(window).height(); //get viewport height
  let screenWidth = $(window).width(); //get viewport width
  let scrlPositionTop = scrlValue * 1.06;  //  //get scroll position + its multiplied so it can be bigger than offset().top of the divs
  let scrlPositionBottom = scrlValue + screenHeight;  //get bottom scroll position

  //header menu and side nav active effect on scroll
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
  if (scrlPositionTop >= ($(".container4").offset().top)){ 
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
  if ((scrlPositionTop > 0) && (scrlPositionTop < 500)) {
    $(".rotated-text").addClass("show");
    $(".small-txt").addClass("show");
    $(".blue-box").addClass("width70");
    $(".big-txt").removeClass("show");
  }
  if (scrlPositionBottom < ($(".container1").offset().top + screenHeight)) {
    $(".rotated-text").removeClass("show");
    $(".small-txt").removeClass("show");
    $(".blue-box").removeClass("width70");
    $(".big-txt").addClass("show");
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
  if ((scrlPositionTop) > ($(".container4").offset().top)){
    animated = false; // make the buddha.gif available to restart again
  }
  if ((scrlPositionBottom) >= ($(".info-container").offset().top)){
    $(".houses-container img").removeClass("hide-houses"); // show houses on contact page
  }
  if ((scrlPositionBottom) <= ($(".info-container").offset().top)){
    $(".houses-container img").addClass("hide-houses"); // hide houses on contact page
  }
}

window.addEventListener("scroll", allFx);

// SLIDE SHOW
  var imgIndex = 0;
  var imgArray = [
    "images/web1.jpg",
    "images/web3.jpg",
    "images/web2.jpg"
  ];
  var webArray = [
    "http://www.slave-angelovski.com/",
    "http://www.slave-angelovski.com/furniture_site/",
    "http://www.slave-angelovski.com/space_elevator/"
  ];
  var isActive = false;
  function removeAnim(){
    query(".websites-img").classList.remove("img-left", "img-right");
    isActive = false;
  }
  function addRemove() {
    removeClass(".text-area", "active"); //remove active
    query(".web-img img").src = imgArray[imgIndex]; // change image
    queryAll(".text-area")[imgIndex].classList.add("active"); //change the text
    query(".visit a").href = webArray[imgIndex]; //change the url on visit button
  } 
  addRemove();// select first image
  function handleRanges() {
    if (imgIndex === imgArray.length) { // prevent going over the num of images
      imgIndex = 0;
    } 
    if (imgIndex < 0){ // prevent going under 0
      imgIndex = imgArray.length - 1; //because length starts from 1
    }
  }
  function arrowRight() {
    imgIndex++;
    handleRanges();
    addRemove();
    query(".websites-img").classList.add("img-right");
    query(".websites-img").addEventListener("webkitAnimationEnd", removeAnim); // Code for Chrome, Safari and Opera
    query(".websites-img").addEventListener("animationend", removeAnim); // Standard syntax
  }
  function arrowLeft() {
    imgIndex--;
    handleRanges();
    addRemove();
    query(".websites-img").classList.add("img-left");
    query(".websites-img").addEventListener("webkitAnimationEnd", removeAnim);  // Code for Chrome, Safari and Opera
    query(".websites-img").addEventListener("animationend", removeAnim); // Standard syntax
  }
query(".nav-right").addEventListener("click", function() {
  if (!isActive) {
    isActive = true;
    arrowRight();
  }
});
query(".nav-left").addEventListener("click", function() {
  if (!isActive) {
    isActive = true;
    arrowLeft();
  }
});

// initialize glightbox gallery
$(document).ready(function() {  
  var myLightbox = GLightbox({
  'selector': 'glightbox'});
});
