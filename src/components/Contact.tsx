/** @format */

"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      color: "hover:bg-gradient-to-tr from-purple-600 to-pink-500",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/yourusername",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to bring your ideas
            <br /> to life?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Let&apos;s collaborate and create something extraordinary together.
            Your vision, my expertise – the perfect combination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
              <div className="flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
                  <p className="text-gray-400">
                    Have a project in mind? Let&apos;s discuss how we can work
                    together.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="mailto:Bilguun040728@gmail.com"
                    className="group flex items-center gap-2 text-lg font-medium hover:text-purple-400 transition-colors"
                  >
                    Bilguun040728@gmail.com
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center transition-colors ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <form className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
