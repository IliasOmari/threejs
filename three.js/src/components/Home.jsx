import "../home-modules.css";
import Hamburger from "../assets/hamburger.png";
import Mercedes from "../assets/mercedes.png";
import Shoes from "../assets/nike.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="title">
        <h1>Models</h1>
      </div>

      <div className="models">
        <motion.div
          className="model"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="projectImg">
            <img src={Hamburger} alt="halburger" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Fast-Food</h2>
              <p>Black & White</p>
              <br />
            </div>

            <motion.div className="button">
              <Link to={"/fastfood"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Discover
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="model"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 0.3,
          }}
        >
          <div className="projectImg">
            <img src={Mercedes} alt="Mercedes" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Car</h2>
              <p>Mercedes Class A</p>
              <br />
            </div>

            <motion.div className="button">
              <Link to={"/fastfood"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Discover
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="model"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 0.6,
          }}
        >
          <div className="projectImg">
            <img src={Shoes} alt="Nike" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Shoes</h2>
              <p>Nike Air Force 1</p>
              <br />
            </div>

            <motion.div className="button">
              <Link to={"/fastfood"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Discover
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
