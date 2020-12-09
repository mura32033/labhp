'use strict';

const header = document.querySelector('header');
const headerHeight = header.clientHeight;
var previousPos = 0;

var smdw = document.getElementsByClassName('smdw')[0].childNodes[3].classList;
const menuClose = 'nav_items__close';
const menuOpen = 'nav_items__open';

const onScroll = () => {
  var currentPos = window.scrollY;
  if(currentPos > headerHeight && currentPos > previousPos){ //下スクロール時
    header.classList.remove('header-fix');
    header.classList.add('header-unfix');
    if(currentPos < headerHeight * 2){
      header.classList.remove('header-shrink');
      header.classList.add('header-expand');
    } else {
      header.classList.remove('header-expand');
      header.classList.add('header-shrink');
    }
    if(smdw.contains(menuOpen)) {
      smdw.remove(menuOpen);
      smdw.add(menuClose);
    }
  }
  if(currentPos < headerHeight || currentPos < previousPos){ //上スクロール時
    header.classList.remove('header-unfix');
    header.classList.add('header-fix');
    if(currentPos < headerHeight * 2){
      header.classList.remove('header-shrink');
      header.classList.add('header-expand');
    } else {
      header.classList.remove('header-expand');
      header.classList.add('header-shrink');
    }
  }
  previousPos = currentPos;
};

window.addEventListener("scroll", () => {
  onScroll();
});

function onMenuBtn () {  
  if(smdw.contains(menuClose) || smdw.contains('nav_items__init')){
    smdw.remove(menuClose);
    smdw.remove('nav_items__init')
    smdw.add(menuOpen);
  } else if(smdw.contains(menuOpen)) {
    smdw.remove(menuOpen);
    smdw.add(menuClose);
  }
}