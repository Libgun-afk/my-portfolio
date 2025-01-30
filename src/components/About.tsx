/** @format */

import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-10">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-2 border-white  px-8 py-2 text-xl font-bold text-white "
      >
        About Me
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 mt-10 md:mt-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-gray-400"
        >
          <TextGenerateEffect
            words="Hello! My name is Bilguun. I am a dedicated and aspiring FullStack Software Engineer. I am eager to apply for a position at your company, leveraging my skills and passion for innovation to contribute meaningfully to your team."
            duration={1}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <img
            src="/untitled-3.jpg"
            alt="Profile"
            className="w-[400px] h-[400px] max-w-sm md:max-w-md lg:max-w-lg pb-10  rounded-lg object-cover shadow-lg "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
