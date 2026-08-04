"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ServicesSection } from "@/components/home/ServicesSection"
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { TestimonialSection } from "@/components/home/TestimonialSection"
import { FAQSection } from "@/components/home/FAQSection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-sm">
              Govt. Services & Digital Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
              Your One Stop Solution for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Government Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
              Fast • Reliable • Secure • Easy
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 gap-2 group" asChild>
                <Link href="/services">
                  View Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Animated Counters */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-20"
          >
            {[
              { label: "Happy Customers", value: "100+" },
              { label: "Services", value: "100+" },
              { label: "Customer Satisfaction", value: "99%" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2">
                <span className="text-4xl font-bold text-primary mb-2">{stat.value}</span>
                <span className="text-gray-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            About <span className="text-primary">Mudra Online Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Mudra Online Services is a trusted CSC Service Center dedicated to providing fast, reliable, and transparent government and digital services under one roof. We help citizens with documentation, registrations, certificates, tax filing, insurance, utility payments, and many other online services. Our goal is to make government services simple, accessible, and hassle-free for everyone.
          </motion.p>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  )
}

