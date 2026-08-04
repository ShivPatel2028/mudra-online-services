"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Mudra Online Services Logo" 
            width={50} 
            height={50} 
            className="rounded-full object-contain bg-white"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none text-primary">Mudra</span>
            <span className="text-xs font-semibold text-secondary tracking-wider">ONLINE SERVICES</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-secondary ${
                isScrolled ? "text-gray-800" : "text-gray-800 lg:text-gray-900" // Adjusted for light hero background
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call to Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex gap-2">
            <PhoneCall size={16} />
            Call Now
          </Button>
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-b shadow-lg"
        >
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-gray-800 font-medium hover:bg-muted hover:text-primary rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 w-full flex gap-2">
              <PhoneCall size={16} />
              Call Now
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
