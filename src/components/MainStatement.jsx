import React from "react";
import "./mainStatement.css";
import svg1 from "../assets/1image.png";
import svg2 from "../assets/2image.png";

const MainStatement = () => {
  return (
    <div className="statement_container">
      <h1 className="statement_heading">Main Focus/Mission Statement</h1>
      <div className="statement_items">
        <div className="statement_item">
          <img src={svg1} alt="Image 1" className="statement_image" />
          <div className="statement_writeup">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </div>
        </div>
        <div className="statement_item">
          <img src={svg2} alt="Image 2" className="statement_image" />
          <div className="statement_writeup">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStatement;
