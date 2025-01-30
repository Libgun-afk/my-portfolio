/** @format */

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
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
          <p className="text-sm">© 2025 Libgun. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
