gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2", // when used pin only target the parent property || start point come to parent
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
