const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  //works only in no height or width is given to the wrapper div
});

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
