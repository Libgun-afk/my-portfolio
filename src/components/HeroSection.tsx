/** @format */

"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/libgunnn/",
      label: "Instagram",
    },

    { icon: Github, href: "https://github.com/Libgun-afk", label: "GitHub" },
    { icon: Mail, href: "mailto:Bilguun040728@gmail.com", label: "Email" },
  ];

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center text-white bg-black"
      style={{
        backgroundImage: `url('')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          FullStack Software
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center space-x-1"
        >
          <span className="text-2xl sm:text-3xl font-mono bg-gradient-to-r from-slate-500 via-slate-200 to-slate-400 text-transparent bg-clip-text">
            Engineer
          </span>
          <span className="w-[3px] h-6 bg-white animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={social.href}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-10 h-10" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
