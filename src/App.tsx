import React from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navigation from "./Components/Navigation";
import OurHappyUser from "./Components/OurHappyUser";
import OurSpecialties from "./Components/OurSpecialties";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <HeroSection />
      <OurSpecialties />
      <OurHappyUser />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
