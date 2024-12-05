"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Navigation,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { IoMdMenu, IoMdArrowRoundBack } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundLines } from "./ui/background-lines";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PortfolioPage() {
  const { theme, setTheme, systemTheme } = useTheme(); // Now inside the component
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const menuVariants = {
    hidden: { x: "100%" }, // Menu off-screen
    visible: { x: "0%", transition: { type: "tween", duration: 0.3 } }, // Slide-in animation
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } }, // Slide-out animation
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // useEffect(() => {
  //   setTheme(isDarkMode ? "dark" : "light");
  // }, []);

  const services = [
    {
      title: "DESIGN",
      description:
        "Таны санаа, хэрэгцээнд тулгуурлан үзэмжтэй, мэргэжлийн загвар зохион бүтээж, вэбсайтын дизайн эхнээс нь амьдралд хэрэгжүүлнэ. Түүнчлэн төслийн туршид мэргэжлийн зөвлөгөө өгөхөд бэлэн байна.",
    },
    {
      title: "DEVELOPMENT",
      description:
        "Орчин үеийн технологийг ашиглан чанартай, найдвартай вэбсайтын хөгжүүлэлт хийж, хэрэгцээнд тань бүрэн нийцэх динамик шийдлүүдийг бүтээж өгнө. Бүх үйл явцыг танд ойлгомжтой байлгахын тулд байнга холбоо барина.",
    },
    {
      title: "MAINTENANCE",
      description:
        "Вэбсайтын үйл ажиллагааг байнгын хэвийн байлгаж, алдаа засвар, шинэчлэлт, сайжруулалтыг цаг тухайд нь гүйцэтгэж, хэрэглэгчийн сэтгэл ханамжийг дээд түвшинд хүргэнэ.",
    },
  ];

  const skills = {
    using: [
      {
        name: "HTML5",
        icon: "https://www.svgrepo.com/show/508795/css3-02.svg",
      },
      { name: "CSS3", icon: "https://www.svgrepo.com/show/452185/css-3.svg" },
      {
        name: "JAVASCRIPT",
        icon: "https://www.svgrepo.com/show/353925/javascript.svg",
      },
      {
        name: "TYPESCRIPT",
        icon: "https://www.svgrepo.com/show/374146/typescript-official.svg",
      },
      {
        name: "REACT",
        icon: "https://www.svgrepo.com/show/303500/react-1-logo.svg",
      },
      {
        name: "NEXT JS",
        icon: "https://www.svgrepo.com/show/342062/next-js.svg",
      },
      {
        name: "NODE JS",
        icon: "https://www.svgrepo.com/show/452075/node-js.svg",
      },
      {
        name: "TAILWIND CSS",
        icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
      },
      {
        name: "MONGODB",
        icon: "https://www.svgrepo.com/show/439231/mongodb.svg",
      },
      {
        name: "MONGOOSE",
        icon: "https://www.svgrepo.com/show/372906/mongodb.svg",
      },
      {
        name: "GIT",
        icon: "https://www.svgrepo.com/show/512317/github-142.svg",
      },
      { name: "FIGMA", icon: "https://www.svgrepo.com/show/452202/figma.svg" },
    ],
    learning: [
      { name: "NODEJS", icon: "https://www.svgrepo.com/show/452202/figma.svg" },
      { name: "MySQL", icon: "https://www.svgrepo.com/show/452202/figma.svg" },
      {
        name: "MONGODB",
        icon: "https://www.svgrepo.com/show/452202/figma.svg",
      },
      {
        name: "TYPESCRIPT",
        icon: "https://www.svgrepo.com/show/452202/figma.svg",
      },
    ],
  };

  const projects = [
    {
      id: 1,
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-11-28-at-111556-GHRZjt.png",
      link: "https://pet-adopt-nu.vercel.app/",
    },
    {
      id: 2,
      image:
        "https://storage.googleapis.com/talent-taiwan-storage/media/articles/images/people-taking-photos-food_23-2149303524.jpg",
      link: "https://www.account.mn/",
    },
    {
      id: 3,
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-12-02-at-123344-k2fNNu.png",
      link: "https://github.com/Libgun-afk/commerce",
    },
    {
      id: 4,
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-12-02-at-120417-y1gf8J.png",
      link: "https://axiom-lovat.vercel.app/",
    },
    {
      id: 5,
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-12-02-at-124554-JMHevf.png",
      link: "https://github.com/Libgun-afk/income-and-expence-tracker",
    },

    {
      id: 6,
      image:
        "https://pinebaatars.s3.us-west-2.amazonaws.com/screenshot-2024-12-01-at-225430-QgIJnd.png",
      link: "https://www.account.mn/",
    },
  ];

  return (
    <div className={`min-h-screen  transition-colors duration-500`}>
      <section className="relative h-screen">
        <div className="container mx-auto px-4 h-full">
          <nav className="py-4 px-2 flex  justify-between items-center   transition-colors duration-500">
            {/* Logo */}
            <div className="text-2xl font-bold text-black dark:text-white ">
              Pinecone
            </div>

            {/* <Spotlight className="sdadasfa fuygg fuysgfuy" fill="#474b64" /> */}

            {/* Menu Button for Mobile */}
            <div className="block md:hidden">
              {open ? (
                <div></div>
              ) : (
                <IoMdMenu
                  className={`text-2xl cursor-pointer text-black dark:text-white ${
                    open ? "md:hidden" : "lg:hidden"
                  }`}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <Link
                href="#about"
                className="hover:text-gray-600  text-black dark:text-white font-semibold"
              >
                About Me
              </Link>
              <Link
                href="#skills"
                className="hover:text-gray-600 text-black dark:text-white font-semibold"
              >
                Skills
              </Link>
              <Link
                href="#portfolio"
                className="hover:text-gray-600 text-black dark:text-white font-semibold"
              >
                Portfolio
              </Link>
              <button
                className="w-9 h-9 flex items-center justify-center"
                onClick={handleTheme}
              >
                <CgDarkMode className="text-xl text-black dark:text-white" />
              </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
              <motion.div
                className="fixed inset-0 h-[200px] dark:bg-zinc-800/95  bg-slate-200/95 z-50 flex pt-4 pl-4 justify-between "
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <div className="flex flex-col px-2">
                  <Link
                    href="#about"
                    className="mb-4 text-2xl font-semibold hover:text-gray-600 text-black dark:text-white"
                    onClick={closeMenu}
                  >
                    About Me
                  </Link>
                  <Link
                    href="#skills"
                    className="mb-4 text-2xl font-semibold hover:text-gray-600 text-black dark:text-white"
                    onClick={closeMenu}
                  >
                    Skills
                  </Link>
                  <Link
                    href="#portfolio"
                    className="mb-4 text-2xl font-semibold hover:text-gray-600 text-black dark:text-white"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                </div>
                <div className="flex flex-col gap-2 pr-3">
                  <button
                    className="w-9 h-9 flex items-center justify-start "
                    onClick={closeMenu}
                  >
                    <VscChromeClose className="text-xl w-9 h-9 dark:text-white  text-black" />
                  </button>
                  <button
                    className="w-9 h-9 flex items-center justify-center"
                    onClick={handleTheme}
                  >
                    <CgDarkMode className="text-xl w-9 h-9 dark:text-white  text-black" />
                  </button>
                </div>
              </motion.div>
            )}
          </nav>

          <div className="grid md:grid-cols-2 gap-12 h-[calc(100vh-80px)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <h1 className="text-6xl font-bold mb-4">
                Hi, I am Bilguun
                <br />
              </h1> */}
              <TextHoverEffect text="Portfolio" duration={1} />
              <div className="text-xl text-gray-600 ">
                <TextGenerateEffect
                  words="
       Мэргэжлийн програм хангамжийн инженер бөгөөд вэб болон мобайл
                апп хөгжүүлэлтийн салбарт ажиллах туршлагатай."
                  className="text-2xl font-bold"
                  duration={2}
                  filter={true}
                />
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://github.com/Libgun-afk"
                  className="p-2 hover:text-gray-600"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/libgun-libgun-4a8b62337/"
                  className="p-2 hover:text-gray-600"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="mailto:Bilguun040728@gmail.com"
                  className="p-2 hover:text-gray-600"
                >
                  <Mail size={24} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              {/* <img
                src="https://i.pinimg.com/474x/bd/39/21/bd3921cd01e83e3bd123a2c0a8ffae66.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              /> */}
              <BackgroundLines
                children
                className="hello world"
                svgOptions={{ duration: 15 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-300 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block border-2 border-black dark:border-white px-8 py-2 text-xl font-bold mb-8">
              ABOUT ME
            </div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Мэргэжлийн программ хангамжийн инженер. Вэб болон мобайл апп
              хөгжүүлэлтэд туршлагатай, React.js болон Node.js зэрэг орчин үеийн
              технологиудыг ашиглан үр дүнтэй шийдэл боловсруулах чадвартай.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block border-2 border-black dark:text-black dark:border-black px-8 py-2 text-xl font-bold">
              SKILLS
            </div>
          </motion.div>

          <div className="space-y-16">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.using.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-semibold text-black dark:text-black">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-neutral-300 dark:bg-neutral-800"
      >
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 "
          >
            <div className="inline-block border-2 border-black px-8 py-2 text-xl font-bold dark:border-white">
              PROJECTS
            </div>
          </motion.div>

          {/* Projects */}
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block border-2 border-black dark:text-black px-8 py-2 text-xl font-bold">
              CONTACT
            </div>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="ENTER YOUR NAME*"
                className="border-x-0 border-t-0 border-b-2 border-black rounded-none focus-visible:ring-0"
              />
              <Input
                type="email"
                placeholder="ENTER YOUR EMAIL*"
                className="border-x-0 border-t-0 border-b-2 border-black rounded-none focus-visible:ring-0"
              />
              <Input
                type="tel"
                placeholder="PHONE NUMBER"
                className="border-x-0 border-t-0 border-b-2 border-black rounded-none focus-visible:ring-0"
              />
              <Textarea
                placeholder="YOUR MESSAGE*"
                className="border-x-0 border-t-0 border-b-2 border-black rounded-none focus-visible:ring-0 min-h-[100px]"
              />
              <div className="text-center">
                <Button variant="outline" className="border-2 px-8">
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100042317904053"
                className="hover:text-gray-400"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/in/libgun-libgun-4a8b62337/"
                className="hover:text-gray-400"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/libgunnn/"
                className="hover:text-gray-400"
              >
                Instagram
              </Link>
              <Link
                href="mailto:Bilguun040728@gmail.com"
                className="hover:text-gray-400"
              >
                Email
              </Link>
            </div>
            <p className="text-sm">© 2024 Bilguun. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
