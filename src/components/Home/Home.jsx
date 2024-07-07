import React from "react";
import Hero from "../Hero/Hero";

import Projects from "../Projects/Projects";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import OurKey from "../OurKeys/OurKey";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <div>
      <Hero />
      <OurKey />
      <ServicesDisplay />
      <Projects />
      <AboutUs />
    </div>
  );
}

export default Home;
