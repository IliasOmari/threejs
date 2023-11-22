import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Nike } from "./Nike";
import "../home-modules.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/no-unknown-property */

const Shoes = () => {
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
