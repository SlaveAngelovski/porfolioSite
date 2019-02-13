// global functions

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

// get element position relative to document
function getOffsetTop(className) {
    if (arguments[0].includes(".")) {
        return query(className).getBoundingClientRect().top + document.documentElement.scrollTop; 
    }
    else {
        return id(className).getBoundingClientRect().top + document.documentElement.scrollTop;
    }
}

function scrollToEl(element, i, aditionalValue = 0) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': queryAll(element)[i].offsetTop - window.screenHeight*0.1 - aditionalValue
    });
  }
  