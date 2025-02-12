/** @format */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const projects = [
    {
      id: 1,
      title: "Tinder Clone",
      year: "2025",
      description: "Mobile, Web, Website & Realtime Chat",
      image: "/tinder.png",
      link: "https://tinder-testing-pinecone-studio.vercel.app/",
    },
    {
      id: 2,
      title: "Pet Adopt",
      year: "2024",
      description: "Mobile, Web, Website",
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-11-28-at-111556-GHRZjt.png",
      link: "https://pet-adopt-nu.vercel.app/",
    },
    {
      id: 3,
      title: "Hustle",
      year: "2024",
      description: "Mobile, Web, Website",
      image: "/account.png",
      link: "https://www.account.mn/",
    },
    {
      id: 4,
      title: "Food Delivery",
      year: "2024",
      description: "Mobile, Web, Website, Admin Panel",
      image: "/food.png",
      link: "https://food-delivery-mkae.vercel.app/login",
    },
    {
      id: 5,
      title: "Blog",
      year: "2024",
      description: "Mobile, Web, Website",
      image: "/blog.png",
      link: "https://blog-ashen-eight-45.vercel.app/",
    },
  ];

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-20 z-0"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-2xl font-bold border-b-4 border-blue-500 pb-2">
            My Projects
          </span>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="flex justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={projects[currentIndex].id}
                initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "next" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[600px] rounded-lg overflow-hidden shadow-lg"
              >
                <Link
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-full h-[350px] group overflow-hidden rounded-lg">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${projects[currentIndex].image})`,
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium"
                      >
                        {projects[currentIndex].year}
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl font-bold"
                      >
                        {projects[currentIndex].title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-white/80"
                      >
                        {projects[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
