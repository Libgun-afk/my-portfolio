/** @format */

// /** @format */

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ProjectCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const projects = [
//     {
//       id: 1,
//       title: "Tinder clone",
//       year: "2025",
//       description: "Mobile, Web, Website & Realtime Chat",
//       image: "/tinder.png",
//       link: "https://tinder-testing-pinecone-studio.vercel.app/",
//     },
//     {
//       id: 2,
//       title: "Pet Adopt",
//       year: "2024",
//       description: "Mobile, Web, Website ",
//       image:
//         "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-11-28-at-111556-GHRZjt.png",
//       link: "https://pet-adopt-nu.vercel.app/",
//     },
//     {
//       id: 3,
//       title: "Hustle",
//       year: "2024",
//       description: "Mobile, Web, Website ",
//       image: "/account.png",
//       link: "https://www.account.mn/",
//     },
//     {
//       id: 4,
//       title: "Food Delivery",
//       year: "2024",
//       description: "Mobile, Web, Website, Admin Panel",
//       image: "/food.png",
//       link: "https://food-delivery-mkae.vercel.app/login",
//     },
//     {
//       id: 5,
//       title: "Blog",
//       year: "2024",
//       description: "Mobile, Web, Website ",
//       image: "/blog.png",
//       link: "https://blog-ashen-eight-45.vercel.app/",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 2) % projects.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 2 + projects.length) % projects.length);
//   };

//   return (
//     <section className="min-h-screen bg-black text-white relative overflow-hidden py-20">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block border-2 border-white px-8 py-2 text-xl font-bold">
//             PROJECTS
//           </div>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative">
//           <div className="grid md:grid-cols-2 gap-6">
//             <AnimatePresence mode="wait">
//               {[0, 1].map((offset) => {
//                 const projectIndex = (currentIndex + offset) % projects.length;
//                 const project = projects[projectIndex];

//                 return (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.5, delay: offset * 0.1 }}
//                     className="relative w-full"
//                   >
//                     <Link
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block"
//                     >
//                       <div className="relative w-[480px] h-[300px] md:w-[480px] md:h-[300px] group rounded-xl overflow-hidden">
//                         {/* Background Image */}
//                         <div
//                           className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
//                           style={{
//                             backgroundImage: `url(${project.image})`,
//                           }}
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:opacity-75 transition-opacity duration-300" />

//                         {/* Content */}
//                         <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform group-hover:translate-y-0 transition-transform duration-300">
//                           <div className="space-y-3">
//                             <motion.span
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium"
//                             >
//                               {project.year}
//                             </motion.span>
//                             <motion.h2
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.1 }}
//                               className="text-2xl md:text-3xl font-bold"
//                             >
//                               {project.title}
//                             </motion.h2>
//                             <motion.p
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.2 }}
//                               className="text-sm md:text-base text-white/80"
//                             >
//                               {project.description}
//                             </motion.p>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
//             aria-label="Previous projects"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
//             aria-label="Next projects"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectCarousel;

/** @format */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Tinder clone",
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block border-2 border-white px-8 py-2 text-xl font-bold">
            PROJECTS
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {[0, 1].map((offset) => {
                const projectIndex = (currentIndex + offset) % projects.length;
                const project = projects[projectIndex];

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="relative w-full"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative w-full h-[300px] group rounded-xl overflow-hidden">
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                          style={{
                            backgroundImage: `url(${project.image})`,
                          }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:opacity-75 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end transform group-hover:translate-y-0 transition-transform duration-300">
                          <div className="space-y-3">
                            <motion.span
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium"
                            >
                              {project.year}
                            </motion.span>
                            <motion.h2
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-2xl md:text-3xl font-bold"
                            >
                              {project.title}
                            </motion.h2>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-sm md:text-base text-white/80"
                            >
                              {project.description}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
            aria-label="Previous projects"
          >
            <ChevronLeft className="  w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110 z-10"
            aria-label="Next projects"
          >
            <ChevronRight className=" w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
