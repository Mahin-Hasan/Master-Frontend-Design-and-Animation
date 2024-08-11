const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  //works only in no height or width is given to the wrapper div
});

function page4Animation() {
  var fixedImg = document.querySelector("#fixed-image");
  var ItemContainer = document.querySelector("#item-container");

  ItemContainer.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });
  ItemContainer.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });

  //beginner way
  // var item1 = document.querySelector("#item1");
  // item1.addEventListener("mouseenter", function () {
  //   var img = item1.getAttribute("data-image");
  //   fixedImg.style.backgroundImage= `url(${img})`
  // });
  //advanced way
  var items = document.querySelectorAll(".item");
  items.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixedImg.style.backgroundImage = `url(${image})`;
    });
  });
}

// Swiper

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var mobileNav = document.querySelector("#mobile-nav");
  var navImg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag === 0) {
      mobileNav.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      mobileNav.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();
