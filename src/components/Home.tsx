/** @format */

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
      {
        name: "GRAPHQL",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeefbmS16N_Nw0jZSh3aIfVJg7Pz9CLqcnCA&s",
      },
      {
        name: "JEST",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hv13xWYrg_Usxww9OTPx3FdKaIukCcCwrA&s",
      },
      {
        name: "SQL",
        icon: "data:image/jpeg;base64,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",
      },
      {
        name: "DAISY UI",
        icon: "data:image/png;base64,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",
      },
      {
        name: "VERCEL",
        icon: "data:image/png;base64,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",
      },
      {
        name: "RENDER",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE8ba04tH5NUP7_7Y_YYip9PqgN_tmIOTObqIAxHz4vlJpYnLRKhlnUdUtq9XTxeAXaY&usqp=CAU",
      },
      {
        name: "MUI",
        icon: "data:image/png;base64,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",
      },
      {
        name: "APOLLO GRAPHQL",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAhFBMVEX///8AAAAqKiqUlJSZmZmhoaHLy8v6+vri4uL29vbq6uru7u7y8vLW1tb8/PykpKTBwcGvr6/c3Ny5ubmJiYlwcHBjY2NZWVnHx8d3d3c7OzuDg4OysrJ5eXmdnZ0SEhJPT08hISFFRUWOjo5oaGhMTEwZGRkxMTE+Pj4LCwseHh41NTWkM2gCAAANjElEQVR4nNVdaUPiMBB15SrlFrkUEAQ81v///1aRwksyk+aYHvs+ik0yaTJ5c2R6d1cO0sFy3Tqs5qePp/tvPH287hbHzWE0bSfdkoZQILqDyfPijx1fx+Y4qXqggRi2W8cc8RBPz+v/TdL24clDwCvmo/9F0HS0CxEww2w8rFqCPCSNvzES/mKx7lQtB4+0uY+X8CLntGphaExfpST8xeahaol0pI+yEp7xvq5aLEQ77ywMRqMuZGF6X5SIP9ikVcv3jcmnw0hPq28Otxwkab/TuRsOO/00+WZ62+f5l8PDx6rFXOcMcD/b5nC27mD9mHewHnsliUNhubcNbbFtO5936fTZuug3Ve3NxHJmnLb+B0B3/GwRs1GABLnorNjxRDCzpMWT3rHk8J0wYiVcRrbca71zy6PcrZkwWvFVho0lHLVoijTvhgY9hEdBXT8+kV3sy+J6KakH3ybC3ST0pj8Id0NjQnX9VYRW6JKr9r54bjCkaOpTu6DeOuTGkF4zOh6oqY3VpzZ0qLc5L7DDu7sW0WPR5m1/Zvb5UuCSnZvdlUFEHgiCUBQz6JpadVHS8UzYAcVoWWI7lke0OqYP9zidnZ1m85HcTC+NXmZibbugbc7xFXOhLWqejkXqVBKEArpCRDU09VYXFbiAxxYpd/HNG4fVKL7NAPQtwYddbOMbvcXKQhYWs/oxrmWdKe8khhsIy5KNMlD09xg5ZZFI3zghXyNa1VdI5VGKAl6lbgcMBIcbBMpGiFxi+vlYtaP37m7LCvke2KLGc176ouMNAmElZAhrUFsa93UIjn7wQga9gr7McpCFhRAE7aV9DWW8s4QJQ2IJanP34sMNg4X0BLSmkvK3uiRl8IG0k39jmgFXl5CvrigAW++2umoD1Z+PV7DRTP8xqnG5ynkOgPMR+Dsq1Q1ZOV9VwOhX71NSZQHV2h0GuqSM/i9CsWcWBQw0CgNCRn8vj3IWvRQwzEiYloi/P0Zto47pmR11X34GKMY9NlB0DCkQbYjStgKeVzRrsRGkGKSTzXy3mDWC4oY9ZSVID60mUJa7SHj1+e89g7eKEiEVQrERaZLQ+BmeRDrwhqJ1RFq0JuBVorsVz5VMLoDFYVERm8IByATnEpuMlWg2xeEn47c62IUsP2VuiN0L0QC7jBUwY/SX72WaNEPUGsr25SovUigDKTcJ399rEQfckTFBIgDvksnwJtORM7BvIY8Hld+koVzfCp7aO6E22XDiDeWmkezlp5cy4g2U6dJF1iq0I615KVeUabJiUExItQ5ZwRAlsnTUg1KBDzID2ER5F+zw/JBytDre+n0W6i4fL9CrUJM53Fy8v1ygHpS6muB8q7IsFz2m60jRSVcZQ6JusQOS8tDZMv40lBM1Q2NBKsvT44JsOffNMIFOqMkeKc6K5gdCfZ4xXG82TWptQH9SbhcjSfaMAW1gCuYIX5ibGR5BSidlFbxQwnwy6kjOU389JozoAThiPoU6oyPCTY7PiiUl7K9N6j6q2y9iq5WWpcdJHxK1oQAERCP+qCOEVivNzc8HIvmLkEsJp1DzkaG5LNQZzc3P1IbONxKaXAyuqr/A0pKy0+lLu+efaEtaJu6irCB13uAHoTgTnXu7+v2R1LtSSwhmV3EEptCV0KUg65Kk7wsLTS/0rJxL09vfpRyEpBjZ6USbYB8yPSNjxr+DSSS0M6aGCD+4MlS6PIQMS+8zLUKOmdCaoRPgrn3S3lih64JQwQqjSdCRTFCU5uYfOb8LqR6wNcC4ScT7oTULMBC6bogMS4cTGjQPbFUhfyv9ooBL0lRBJowHxzDwcJh3Gb8ZzU5RoTMOWRG/C7Z9m1e4SyvjzKYLLCoxZfp6h0wYD7jGzaMLCl2EQHbo16T8D+3/kTmlYQJvbkDp9ULXsdF2Aj0RIpMMxvFVvaI+l+iDOeq18Rs3T88QMQ/WRHugjURCLzQ319NmmVRyiTAeNH09LWB7HAW6YN6R4ZWnhZTQfGhvZH+DLSTi+qBHbxBTOoYgsZbwDMn+BvtU4tY5zc1NE4O57SnBK6G5zHIEricReKEZG7EM6VKwEosJNF82Z3CsCASYU3PcPyBS2Gjns4SCBxso0+kw9QIhXzqVjvIdM9MhkGwHjCt7bfByBcxWj5HTcWgBlr4xO4YO4gkPk0pH/i9T4S/eywSKO9My0H588icdrqONGyYlLT7ODWZV5unIm3Af0PeoOEpKO0nigzGQ45FpdUkhaecNZ1ww2enROh72QXbySwpJp9JxC5AxnaPJZbFCMql0rNJmKiPEqgZwrhQgJF3/kXccMakTsSy92DfpPWb6gdiSBnYhI605JpXOsvposyyWedmFjIxp0xTGlg7AmM6RTkNgxZmQUMk8jmwwqXRWlzH9SOS+IYxHCOjFGXNMKp3reBBxNh9E7zLGA3dK45xl9HjtBiJjOsd58iFwns2WlD3JnQeDweDh4SH5QZqmvV6/3+9+4/LUnn4qyh4CAp1JJOUZ8PzWxOUNM+WgopLtoLh3pqeFfDz511w0/D7GmM5RqgeayVSpkLeOr9DF4KIAmOuVMWE8Yq5gL8U4sOmUDgsukXuGQUQk21F+V2DVEUrNVoCVwe+DjAkaQUxAoKsnVCYW4nTNRcVlRTIKK1w/ULEQEf+H2zUXFRe7kfZGRyTbgffjlmsB7rpgZux4zUXF5Vnm12BmAh7JWzILGbT0hMvXeAxMjUEhglOK9tREwesNPUOcr7kouLhYuRvBgWPBnXPzscKmCL2gYfsyjQUXDcr8Gpg4RSeD8imizgiTMfMZMKZzYLIdqAf0xkPDYcaWxzUXBZdzmbtKGsbSYcowkQ0syrAlEvzJycueYX4NS7aDwwJDMCB7kEpjUuUccDnxuaoSIYNBBoVLAShCUNkvJtLogK/fBjjlHBLGQ12Nf8c+Qtw8wTJe55r5PlpIGA+cMCrJh3YDNmUAN7/isu24cgQBsUSYL/WuCXCeAGuL+1bxpsGhuW02m63RaDS5kHRuV/sn26HtrpJUDId6N8uk0vm1xHw4z19F8FdccFN682KOm3tRRK4Rb9caLErd7oZmvQ8n7tt0XryCWw7euwee1WMwcFL6pmNyJeY9ozacr88zPIMHiE6Y8DdPm5Lj5p6WPWM6+4bxwEFhWt3QrOd6ZQbn7aNhmvkKbsV03eIx4NUq9wa8vW2ck8hra6OlYGpQ+68W0N9QDGBkHKXwCuPhziZ+hl99NBrnAA/g1gItIROgdh2uFg+NxtkPAWFUToN5+J3Qi0/pT1wtHoqRm/4Atx9nOnu4ZOAputoO/IO7y5PzQQUV9OE+3u3sIMDR0BfB8X6VM5nijvAg9zfzrVn3MB4qQdp+QRWyc2yVDdcFBTJYv2bA89wJho4ax8OJC9cFhqS4T4s7LqyZwyO4oh3T27ipD8w+5kxntzlDm5Q30TDC6LTZ+6NR6xtNHaGx8P5oMhmd0UKM3Exn9N7yOgFN53LLAkpA0Q+W/8N/q2MheyswedFmr6MOr91nF3Kg8EubclfM8zp9CMUBeGLbPeSYOOZpyFUMhRPafcfKq6zX915ygEdsXqhDYValjE4GirMv1yON/1xeicdYdPyGrdy6Ka9aZyQUH75DBgvSnrp8+i0PiufEhR4pQeNyCgNGA4fsdj9IiUr8F7xH8fO5JR4q1EGqBlmRUNbezvEhJZW8/hpWTUB0jiErT5X+IXhfKNvLXYmobt4afOzWBsUn6rO7lJ1cbw6rugu9DnblyTrbz2oY3i9UpS5YqVqWBUC5r+l7j0112QvVt5eHmgnmnaWmegdrygnUxEP/W5datKqWKlZNBAu5JKwGVz/r8gVjgJow8jeoDXVb1s8g0dJPAy93qflDFX2VjoUWmA6tGKLdgpD6TooMNBnDbcK0vlJqMsYUGG/XVUot9hu3lSaSjclBS6t5iVT9WvB3X4vvxOslbqIPcf02Qw2+FK/fDxegY3qiVOUhEr1eiIjfVG+02g83d/SCDUKTrktZpX1p5J2KGUi6lPdCtdL9YVTVEjQCjQTGigJeRvkeUQVhpL1VsWQfjIwt4ViNeYendC1r5muJH2dmza5y3c6Jkch0XwAxMXNuP0t0/ZgFYor53lhqVkuYyXzJORdELqbQNxRMELckJQrC5qFHpGIWyEiIqkL7wtcslRtdqNajcnh3hforqetNp4J3SZ+qJzAvTMwplcws9eFIC8jM+kUhKRQTqjDMZynZGnQ+/Ek6jtmhE4ZXwt2woIspvo0Et8oD3UeZUZkBk/c/kxlDZ8LcViw5ts/deflziN4yY+6GwnvpuVMpWz/h5RB+inWnTDHUP+XwDgNLS1Gs2TrArh40mZpgP1iVxCANMNWvLy90tXY/PrvtprWyRrGEIwfcnZwMr4/rQY5FlIy3x5xCaU8VewiHeWKeRZ01JuNB0rutuGE/GSwnzc3CoQ7cew0yiYbhhT9c8FqXfIUJXTNbAMc6Zdy2PYtluqFRt0yFnsvm9MFC4GsTBaDN8M0A3I/q9hIBSwk5v7Y1TRu6YXDgbkE6YT6pLAbhh/50xV1PtuLUrDwu6Ife+MCVWSBxHP1nAl6RjBvH3MX7NGu1a6xmHNEbjCfNx9l89/G1Py/jz7/vH6f57HE7WSaFJyH8A2djliJt811QAAAAAElFTkSuQmCC",
      },
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
              {/* <div className=" bg-gray-400 border rounded-2xl flex ">
                <TextHoverEffect text="Portfolio" />
              </div> */}
              <div className="text-xl text-gray-800 ">
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
              {/* <BackgroundLines
                children
                className="hello world"
                svgOptions={{ duration: 15 }}
              /> */}
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
