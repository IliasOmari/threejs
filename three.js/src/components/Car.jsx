import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Mercedes } from "./Mercedes.jsx";
import { Link } from "react-router-dom";
/* eslint-disable react/no-unknown-property */

const Car = () => {
  return (
    <>
      <div className="button-back">
        <Link to={"/"}>
          <button>Back to models</button>
        </Link>
      </div>
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
