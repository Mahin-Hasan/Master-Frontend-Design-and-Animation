//simple left to right animation
// function breakTheText() {
//   var h1 = document.querySelector("h1");
//   var h1Text = h1.textContent;

//   var splitedText = h1Text.split("");

//   var clutter = "";

//   splitedText.forEach(function (elem) {
//     // clutter = clutter + elem;
//     // clutter += elem;
//     clutter += `<span>${elem}</span>`;
//   });
//   h1.innerHTML = clutter;
// }
// breakTheText();
// gsap.from("h1 span", {
//   y: 50, //in inline element transfrom translate does not work
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.15, //if - the refverse order
// });

//animate text from middle
function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitedText = h1Text.split("");
  var halfValue = Math.floor(splitedText.length / 2);
  // var halfValue = splitedText.length / 2;

  var clutter = "";
  console.log(halfValue);
  splitedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="odd">${elem}</span>`;
    } else {
      clutter += `<span class="even">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakTheText();
gsap.from("h1 .odd", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5, 
  stagger: 0.15, 
});
gsap.from("h1 .even", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15, //if - the refverse order
});
