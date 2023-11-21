import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Burger } from "./Burger.jsx";

/* eslint-disable react/no-unknown-property */

const FastFood = () => {
  return (
    <>
      <Canvas
        camera={{ position: [10, 10, 0], fov: 100 }}
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight intensity={5} />
          <Burger />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default FastFood;
