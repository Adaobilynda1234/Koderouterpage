import React from "react";
import "./mainProject.css";
import mainprojectimg1 from "../assets/Rectangle 17.png";
import mainprojectimg2 from "../assets/image 15.png";
import mainprojectimg3 from "../assets/image 16.png";
import mainprojectimg4 from "../assets/image 17.png";
import mainprojectimg5 from "../assets/image 18.png";
import { FaArrowRight } from "react-icons/fa6";

const MainProjects = () => {
  return (
    <div className="mainproject_container">
      <h1 className="mainproject_heading">Our Projects</h1>
      <div className="mainproject_imagegrid">
        <div className="mainproject_griditem">
          <img
            className="sample_project_img"
            src={mainprojectimg1}
            alt="project 1"
          />
          <div className="sample_project">
            <h3>
              Sample <br />
              project
            </h3>
            <p>
              View more <FaArrowRight />
            </p>
          </div>
        </div>
        <div className="mainproject_griditem">
          <img src={mainprojectimg2} alt="project 2" />
        </div>
        <div className="mainproject_griditem">
          <img src={mainprojectimg3} alt="project 3" />
        </div>
        <div className="mainproject_griditem">
          <img src={mainprojectimg4} alt="project 4" />
        </div>
        <div className="mainproject_griditem">
          <img src={mainprojectimg5} alt="project 5" />
        </div>
        <button>
          All project <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MainProjects;
