import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
const App = () => {
  // const gsapRef = useRef();
  // const container = useRef();
  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1500,
  //     duration: 2,
  //     delay: 1,
  //   });
  // });
  //selecting specific box
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 1500,
  //     duration: 2,
  //     delay: 1,
  //   });
  // },{scope:".container"});
  //same but using useRef
  // useGSAP(
  //   () => {
  //     gsap.to(".box", {
  //       x: 1500,
  //       duration: 2,
  //       delay: 1,
  //     });
  //   },
  //   { scope: container }
  // );
  //2

  // const [circle, setCircle] = useState(0);
  // const random = gsap.utils.random(-500, 500, 100); //range x to y, 3rd divisible by

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration:0.5,
  //   });
  // },[circle]);// dependency must be added as circle value is changing on click
  //more animations

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const randomValX = gsap.utils.random(-500, 500, 100);
  const randomValY = gsap.utils.random(-200, 200, 100);
  const rotateVal = gsap.utils.random(-360, 360, 30);
  // const boxRef = useRef();
  const imageRef = useRef();
  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        x: xValue,
        y: yValue,
        rotate: rotationX,
        duration: 0.6,
      });
    },
    { dependencies: [xValue, yValue, rotationX] }
  ); // now u can add scope for targeting specific dlement 
  return (
    <main>
      {/* <div ref={container} className="container">
        <div ref={gsapRef} className="box"></div>
      </div>
      <div ref={gsapRef} className="box"></div> */}
      {/* <button onClick={() => setCircle(random)}>Animate</button> */}
      {/* <div className="circle"></div> */}

      <button
        onClick={() => {
          setXValue(randomValX);
          setYValue(randomValY);
          setRotationX(rotateVal);
        }}
      >
        Animate
      </button>
      {/* <div ref={boxRef} className="box"></div> */}
      <img
        onClick={() => {
          setXValue(randomValX);
          setYValue(randomValY);
          setRotationX(rotateVal);
        }}
        ref={imageRef}
        src="https://images.vexels.com/content/242241/preview/side-fly-geometric-color-stroke-123fa9.png"
        alt=""
      />
    </main>
  );
};

export default App;
