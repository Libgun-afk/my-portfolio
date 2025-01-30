/** @format */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTheme } from "next-themes";
import About from "./About";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Porject from "./Porject";
import Footer from "./Footer";
// import ContactSection from "./Contact";

export default function HomePage() {
  return (
    <div className={`min-h-screen  transition-colors duration-500`}>
      <HeroSection />
      <About />
      <Skills />
      <Porject />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
