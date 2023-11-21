import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Nike } from "./Nike";
import "../home-modules.css";



/* eslint-disable react/no-unknown-property */

const Shoes = () => {
  return (
    <>
      <Canvas
        camera={{ position: [20, 10, 20], fov: 30 }}
        style={{
          height: "120vh",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight intensity={5} />
          <Nike />
        </Suspense>
        <OrbitControls />
      </Canvas>

     
    </>
  );
};

export default Shoes;
