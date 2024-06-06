import React from "react";
import "./gallery.css";
import image1 from "../assets/Rectangle 22.png";
import image2 from "../assets/Rectangle 23.png";
import image3 from "../assets/Rectangle 24.png";
import image4 from "../assets/Rectangle 25.png";
import image5 from "../assets/Rectangle 26.png";
import image6 from "../assets/Rectangle 27.png";
import image7 from "../assets/Rectangle 28.png";
import image8 from "../assets/Rectangle 29.png";
import image9 from "../assets/Rectangle 30.png";
import image10 from "../assets/Rectangle 31.png";

const Gallery = () => {
  return (
    <div>
      <div className="image-container">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
        <img src={image5} alt="Image 5" />
        <img src={image6} alt="Image 6" />
        <img src={image7} alt="Image 7" />
        <img src={image8} alt="Image 8" />
        <img src={image9} alt="Image 9" />
        <img src={image10} alt="Image 10" />
      </div>
    </div>
  );
};

export default Gallery;
