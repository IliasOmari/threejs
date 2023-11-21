import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Mercedes } from "./Mercedes.jsx";
/* eslint-disable react/no-unknown-property */

const Car = () => {
  return (
    <>
      <Canvas
        camera={{ position: [10, 10, 0], fov: 120 }}
        style={{
          height: "100vh",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight intensity={5} />
          <Mercedes />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Car;
