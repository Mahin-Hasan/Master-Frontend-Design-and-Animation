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

// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 180,
//   repeat:-1,//means infinite
//   yoyo:true,// makes the animation
//   backgroundColor: "blue",
//   borderRadius: "50%",
// });

//without timeline we have to calculate each duration

// gsap.to("#box1", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });
// gsap.to("#box2", {
//   x: 1500,
//   duration: 1.5,
//   delay: 2.5,
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "50%",
// });
// gsap.to("#box3", {
//   x: 1500,
//   duration: 1.5,
//   delay: 4,
//   scale: 0.5,
//   backgroundColor: "orange",
//   borderRadius: "50%",
// });

// gsap timeline

// var tl = gsap.timeline()

// tl.to("#box1", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });

// tl.to("#box2", {
//   x: 1500,
//   duration: 1.5,
//   rotate: 360,//in timeline delay is not required as it perfroms in an asynchronus way
// });
// tl.to("#box3", {
//   x: 1500,
//   duration: 1.5,
//   rotate: 360,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale:0.2
});
