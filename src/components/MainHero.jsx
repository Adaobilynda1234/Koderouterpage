import React from "react";
import "./mainHero.css";
import Heroimage from "../assets/Rectangle 6.png";
import slider from "../assets/slide-numbers.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const MainHero = () => {
  return (
    <div className="hero_container">
      <div className="text-section">
        <p className="hero_title_light">Project</p>
        <p className="hero_title_bold">Lorem</p>
        <div className="hero_button">
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
        <img src={slider} alt="slider" />
      </div>
      <div className="image-section">
        <button>
          View project <FaArrowRight />
        </button>
        <img src={Heroimage} alt="house" />
      </div>
    </div>
  );
};

export default MainHero;
