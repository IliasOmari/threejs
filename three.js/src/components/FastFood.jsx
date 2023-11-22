import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Burger } from "./Burger.jsx";
import { Link } from "react-router-dom";
import "../home-modules.css";

/* eslint-disable react/no-unknown-property */

const FastFood = () => {
  return (
    <>
      <div className="button-back">
        <Link to={"/"}>
          <button>Back to models</button>
        </Link>
      </div>
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
