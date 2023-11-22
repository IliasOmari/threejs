import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Burger } from "./Burger.jsx";
import { Link } from "react-router-dom";
import "../home-modules.css";
import { motion } from "framer-motion";

/* eslint-disable react/no-unknown-property */

const FastFood = () => {
  return (
    <>
      <motion.div className="button-back">
        <Link to={"/"}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Back to models
          </motion.button>
        </Link>
      </motion.div>
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
