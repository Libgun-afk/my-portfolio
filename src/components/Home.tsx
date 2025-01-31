/** @format */

"use client";
import About from "./About";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Project from "./Project";
// import ContactSection from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className={`min-h-sreen  transition-colors duration-600`}>
      <HeroSection />
      <About />
      <Skills />
      <div className="flex flex-col">
        <Project />
        <Footer />
      </div>
      {/* <ContactSection /> */}
    </div>
  );
}
