import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12 md:justify-between">
          
          {/* Logo & About */}
          <div className="max-w-sm space-y-4 flex-shrink">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PrimeRealty Logo"
                width={180}
                height={150}
              />
            </div>
            <div className="text-muted-foreground">
              Building exceptional spaces that enhance communities and exceed
              expectations.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex-shrink">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 flex-shrink">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2">
              <div className="text-muted-foreground">Residential Development</div>
              <div className="text-muted-foreground">Commercial Projects</div>
              <div className="text-muted-foreground">Mixed-Use Development</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 max-w-xs flex-shrink">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9692727075
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <div className="text-sm">
                  lifesparkinfra@gmail.com
                </div>
              </div>
              <div className="text-muted-foreground flex gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <div className="text-sm">
                  Plot no- 817/1243, M/s Lifespark Infra & Consulting PRIVATE
                  LIMITED, Telenga Sahi New Bridge, Bhaskarganj, Balasore,
                  Odisha, 756001
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <div>&copy; Lifespark Infra & Consulting. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
