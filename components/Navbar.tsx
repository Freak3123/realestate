"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // helper to check active link
  const linkClass = (href: string) =>
    pathname === href
      ? "text-foreground"
      : "text-muted-foreground hover:text-primary transition-colors";

  return (
    // <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="PrimeRealty Logo"
                width={180}
                height={180}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/contact-us">
              <Button
                size="sm"
                className={
                  pathname === "/contact-us"
                    ? "bg-primary text-white hover:bg-primary/90 border"
                    : "border border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t bg-background px-4 py-4 space-y-4"
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileOpen(false)}
            className={linkClass("/projects")}
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={linkClass("/about")}
          >
            About
          </Link>
          <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
            <Button
              size="sm"
              className={`w-full ${
                pathname === "/contact-us"
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
