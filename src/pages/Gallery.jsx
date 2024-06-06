import React from "react";
import GalleryComp from "../components/GalleryComponent";
import Footer from "../components/Footer";
import "../components/gallery.css";

const Gallery = () => {
  //using inline css to practise what  we were taught in class
  const styles = { marginTop: "50px" };
  return (
    <div>
      <p className="light">Photo</p>
      <p className="heavy">Gallery</p>
      <GalleryComp />
      <div style={styles}>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
