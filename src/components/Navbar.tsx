/** @format */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#Project", label: "Projects" },
    {
      href: "https://drive.google.com/file/d/1G_mXATSDPVsVTFp8MFVY_gcbuAsKv_rH/view",
      label: "My CV",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-4 px-6 md:px-20 flex justify-between items-center backdrop-blur-lg z-50">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer text-black dark:text-white">
        {"<Libgun />"}
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
            className="hover:text-gray-600 text-white font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={closeMenu}
              className="absolute flex items-center right-6 text-3xl  text-black"
              aria-label="Close Menu"
            >
              <VscChromeClose />
            </motion.button>
            <div className="flex flex-row items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.1 * i } }}
                  exit={{ y: 50, opacity: 0 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-bold text-black hover:text-gray-400"
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
    </nav>
  );
};

export default Navbar;
