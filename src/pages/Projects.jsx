import React from "react";
import ProjectsComponent from "../components/ProjectsComponent";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const Projects = () => {
  //using inline css to practise what  we were taught in class
  const styles = { marginTop: "50px" };
  return (
    <div>
      <p className="light">Our</p>
      <p className="heavy">Projects</p>
      <ProjectsComponent />
      <div style={styles}>
        <Pagination />
      </div>
      <div style={styles}>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
