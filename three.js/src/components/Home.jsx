import "../home-modules.css";
import Hamburger from "../assets/hamburger.png";
import Mercedes from "../assets/mercedes.png";
import Shoes from "../assets/nike.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="title">
        <h1>Models</h1>
      </div>

      <div className="models">
        <div className="model">
          <div className="projectImg">
            <img src={Hamburger} alt="halburger" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Fast-Food</h2>
              <p>Black & White</p>
              <br />
            </div>

            <div className="button">
              <Link to={"/fastfood"}>
                <button>Discover</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="model">
          <div className="projectImg">
            <img src={Mercedes} alt="Mercedes" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Car</h2>
              <p>Mercedes Class A</p>
              <br />
            </div>

            <div className="button">
              <Link to={"/car"}>
                <button>Discover</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="model">
          <div className="projectImg">
            <img src={Shoes} alt="Nike" />
          </div>
          <div className="projectInformation">
            <div className="text">
              <h2>Shoes</h2>
              <p>Nike Air Force 1</p>
              <br />
            </div>

            <div className="button">
              <Link to={"/shoes"}>
                <button>Discover</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
