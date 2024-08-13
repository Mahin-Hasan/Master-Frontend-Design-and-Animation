// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });
// gsap.from("#page2 #box", {
//   scale: 0,
// //   delay: 1,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
//   //   scrollTrigger: "#page2 #box", || basic way
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration: 2,
//   x: 500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });
// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from("#page2 #box", {
//   scale: 0, // from 0 to 1
//   opacity: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 5,//makes the animation fully depended on scroll from start to end point || value cam be true and 1 to 5 for smoothness

//   },
// });

gsap.from("#page2 #box", {
  scale: 0, // from 0 to 1
  opacity: 0,
  duration: 1,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
    pin: true

  },
});
