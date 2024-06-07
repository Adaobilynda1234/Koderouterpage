import React from "react";
import Hero from "../components/MainHero";
import MainAbout from "../components/MainAbout";
import MainStatement from "../components/MainStatement";
import MainProjects from "../components/MainProjects";
import MainContact from "../components/MainContact";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Hero />
      <MainAbout />
      <MainStatement />
      <MainProjects />
      <MainContact />
      <Footer />
    </div>
  );
};

export default Main;
