import React from "react";
import "./mainAbout.css";
import pic1 from "../assets/Rectangle 8.png";
import pic2 from "../assets/Rectangle 9.png";
import pic3 from "../assets/Rectangle 10.png";
import { FaArrowRight } from "react-icons/fa6";

const MainAbout = () => {
  return (
    <div className="Mainabout_container">
      <div className="about_images_grid">
        <img src={pic1} alt="Image 1" className="aboutimage" />
        <img src={pic2} alt="Image 2" className="aboutimage" />
        <img src={pic3} alt="Image 3" className="aboutimage" />
      </div>
      <div className="About_writeup">
        <h1>About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>
          READ MORE <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MainAbout;
