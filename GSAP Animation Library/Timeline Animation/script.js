var tl = gsap.timeline();

tl.from("nav h1,nav h4, nav button", {
  y: -30,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.15 ,
});
