import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe, Hash, MessagesSquare, Link as LinkIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo.png" 
                alt="Mudra Online Services Logo" 
                width={50} 
                height={50} 
                className="rounded-full object-contain bg-white"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">Mudra</span>
                <span className="text-xs font-semibold text-secondary tracking-wider">ONLINE SERVICES</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Your One Stop Solution for Government & Digital Services. 
              AAP KE DWAR, SARKAR KI SEVA HAR BAR.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                <Globe size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Twitter">
                <Hash size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                <MessagesSquare size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <LinkIcon size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Services</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Aadhaar Services</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">PAN Card Services</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Passport Assistance</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Income Tax Filing</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">GST Registration</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Insurance Policies</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary-foreground/80">
                <MapPin className="shrink-0 text-secondary" size={20} />
                <span>GF SHOP 5, SAI SHRUSTRI COMPLEX, BHADRAKALI MATA POLE, RAOPURA, VADODARA - 390001</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="shrink-0 text-secondary" size={20} />
                <span>6355238753</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="shrink-0 text-secondary" size={20} />
                <span>mudraonlineservices3028@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Mudra Online Services. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Powered by Mudra Online Services
          </p>
        </div>
      </div>
    </footer>
  )
}
