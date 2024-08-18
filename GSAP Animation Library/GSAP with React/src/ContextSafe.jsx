import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContextSafe = () => {
  const boxRef = useRef();

  //can be written in this pattern but it hampers optimization when large animaiton is applied
  //   const rotateBox = () => {
  //     gsap.to(boxRef.current,{
  //         rotate:360,
  //         duration:1
  //     });
  //   };

  // contextSafe helps in memory management 
  const { contextSafe } = useGSAP();
  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });
  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default ContextSafe;
