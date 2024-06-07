import React from "react";
import "./pagination.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="pagination">
      <a className="big" href="" rel="noopener noreferrer">
        0 <br />1
      </a>
      <a href="" rel="noopener noreferrer">
        05
      </a>
      <a href="" rel="noopener noreferrer">
        <FaArrowLeft />
      </a>
      <a href="" rel="noopener noreferrer">
        <FaArrowRight />
      </a>
    </div>
  );
};

export default Pagination;
