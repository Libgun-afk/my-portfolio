/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },

    {
      href: "https://drive.google.com/file/d/1G_mXATSDPVsVTFp8MFVY_gcbuAsKv_rH/view",
      label: "My CV",
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 w-full py-4 px-6 md:px-20 flex justify-between items-center backdrop-blur-lg z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer text-white">
        <Link href="#hero">{"<Libgun />"}</Link>
      </div>
      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="text-2xl cursor-pointer text-white"
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <VscChromeClose /> : <IoMdMenu />}
        </motion.button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-gray-400 text-white font-semibold transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-full w-1/2 flex flex-col bg-black z-50"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <motion.button
              onClick={closeMenu}
              className="absolute flex items-center right-5 top-3 text-3xl text-white"
              aria-label="Close Menu"
            >
              <VscChromeClose />
            </motion.button>
            <div className="flex flex-col items-center gap-5 p-5 mt-10 bg-gradient-to-br from-blue-900 via-black to-gray-900 rounded-lg">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.1 * i } }}
                  exit={{ y: 50, opacity: 0 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
