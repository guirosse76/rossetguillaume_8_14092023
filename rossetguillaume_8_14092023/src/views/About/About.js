import React from "react";
import Header from "../../components/Header/Header";
import AboutBanner from "../../components/About/AboutBanner";
import AboutContent from "../../components/About/AboutContent";
import Footer from "../../components/Footer/Footer";
import "./About.scss";

function About() {
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutContent />
      <Footer />
    </>
  );
}

export default About;
