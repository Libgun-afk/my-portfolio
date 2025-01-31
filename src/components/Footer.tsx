/** @format */

"use client";

import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black   py-6 relative text-white">
      <div className="container  mx-auto px-4 flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 text-center">
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

        {/* Copyright */}
        <p className="text-sm text-center">
          © 2025 Libgun. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
