import React from 'react'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (

        <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">PrimeRealty</span>
              </div>
              <div className="text-muted-foreground">
                Building exceptional spaces that enhance communities and exceed expectations.
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">Residential Development</div>
                <div className="text-muted-foreground">Commercial Projects</div>
                <div className="text-muted-foreground">Mixed-Use Development</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9692727075

                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <div className="text-sm w-32">
                    lifesparkinfra@gmail.com

                  </div>

                  
                </div>
                <div className="text-muted-foreground flex gap-2">
                  <MapPin className="h-4 w-4" />
                  <div className="text-sm w-32">
                    Plot no- 817/1243, M/s Lifespark Infra & Consulting PRIVATE LIMITED
 Telenga Sahi New Bridge, Bhaskarganj, Balasore, Odisha, 756001

                  </div>
                   

                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <div>&copy; 2025 PrimeRealty. All rights reserved.</div>
          </div>
        </div>
      </footer>

  )
}

export default Footer