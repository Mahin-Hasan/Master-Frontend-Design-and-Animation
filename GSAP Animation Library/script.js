// gsap.to("h1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 180,
//   backgroundColor: "blue",
//   borderRadius: "50%",
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: 0.3, 
// });

gsap.to("#box", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 180,
  repeat:-1,//means infinite
  yoyo:true,// makes the animation 
  backgroundColor: "blue",
  borderRadius: "50%",
});