/** @format */

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="py-4 px-6 md:px-20 flex justify-between items-center bg-fixed transition-colors duration-500 fixed w-full z-50 top-0 left-0 right-0 backdrop-blur-lg">
      {/* Logo */}
      <div className="text-xl font-bold text-black dark:text-white cursor-pointer">
        {"<Libgun />"}
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        {open ? (
          <VscChromeClose
            className="text-2xl cursor-pointer text-black dark:text-white"
            onClick={closeMenu}
            aria-label="Close Menu"
          />
        ) : (
          <IoMdMenu
            className="text-2xl cursor-pointer text-black dark:text-white"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          />
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
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
          Projects
        </Link>
        <Link
          href="https://drive.google.com/file/d/1G_mXATSDPVsVTFp8MFVY_gcbuAsKv_rH/view"
          className="hover:text-gray-600 text-black dark:text-white font-semibold"
        >
          My CV
        </Link>
        {/* <Link
          href="#contact"
          className="hover:text-gray-600 text-black dark:text-white font-semibold"
        >
          Contact
        </Link> */}
        {/* <button
          className="w-9 h-9 flex items-center justify-center"
          onClick={handleTheme}
          aria-label="Toggle Theme"
        >
          <CgDarkMode className="text-xl text-black dark:text-white" />
        </button> */}
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-slate-200/95 dark:bg-zinc-800/95 z-50 flex justify-between p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <div className="flex flex-col gap-4">
            <Link
              href="#skills"
              className="text-2xl font-semibold text-black dark:text-white hover:text-gray-600"
              onClick={closeMenu}
            >
              Tech Stacks
            </Link>
            <Link
              href="#portfolio"
              className="text-2xl font-semibold text-black dark:text-white hover:text-gray-600"
              onClick={closeMenu}
            >
              My Projects
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              className="w-9 h-9 flex items-center justify-center"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <VscChromeClose className="text-xl text-black dark:text-white" />
            </button>
            <button
              className="w-9 h-9 flex items-center justify-center"
              onClick={handleTheme}
              aria-label="Toggle Theme"
            >
              <CgDarkMode className="text-xl text-black dark:text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
