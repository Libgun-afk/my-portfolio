/** @format */
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-30 z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative px-8 pt-7 pb-2 text-xl font-bold text-white"
      >
        <span className="relative z-10">About Me</span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
        />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 mt-10 md:mt-16 flex flex-col md:flex-row items-center gap-12 text-white">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-gray-400"
        >
          <TextGenerateEffect
            className="text-white"
            words="Hello! My name is Bilguun. I am a dedicated and aspiring FullStack Software Engineer. I am eager to apply for a position at your company, leveraging my skills and passion for innovation to contribute meaningfully to your team."
            duration={1.5}
            // delayBetween={0.05}
          />
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center relative z-10"
        >
          <img
            src="/untitled-3.jpg"
            alt="Profile"
            className="w-[400px] h-[420px] max-w-sm md:max-w-md lg:max-w-lg rounded-3xl object-cover shadow-[0px_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
