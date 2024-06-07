import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Project1 from "../assets/image 30.png";
import Project2 from "../assets/image 32.png";
import Project3 from "../assets/image 33.png";
import "./projectComp.css";

const ProjectsComponent = () => {
  return (
    <div className="project_container">
      <div className="item">
        <img src={Project1} alt="project 1" className="image" />
        <div className="text">
          <p className="text_title">Sample Project</p>
          <p className="text_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="text_button">
            View more <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="item">
        <img src={Project2} alt="project 2" className="image" />
        <div className="text">
          <p className="text_title">Sample Project 1</p>
          <p className="text_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="text_button">
            View more <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="item">
        <img src={Project3} alt="project 3" className="image" />
        <div className="text">
          <p className="text_title">Sample Project 2</p>
          <p className="text_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="text_button">
            View more <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
