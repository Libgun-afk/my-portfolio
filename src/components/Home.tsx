/** @format */
"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/LoadingProvider";
import LoadingComponent from "./Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingComponent>
        <div className="min-h-screen transition-colors duration-600">
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <div className="flex flex-col">
            <Project />
            <Footer />
          </div>
          {children}
        </div>
      </LoadingComponent>
    </LoadingProvider>
  );
}
