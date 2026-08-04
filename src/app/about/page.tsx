"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Target, Eye, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold uppercase tracking-wider"
          >
            About Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-gray-900"
          >
            Mudra <span className="text-primary">Online Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a dedicated Common Service Center (CSC) in Vadodara, bridging the gap between citizens and essential government services with transparency, speed, and reliability.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-blue-50/50 border-none shadow-md">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To simplify access to government and digital services for every citizen by providing a single-window platform that ensures secure, efficient, and affordable solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-orange-50/50 border-none shadow-md">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted digital service provider in Gujarat, known for our commitment to customer satisfaction and excellence in service delivery.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Story/Details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-600 mb-20"
        >
          <p>
            Established with the motto <strong>"AAP KE DWAR, SARKAR KI SEVA HAR BAR"</strong>, Mudra Online Services has been serving the community of Vadodara with unparalleled dedication. We understand that navigating government portals and paperwork can be overwhelming. That's why we bring all essential services—from Aadhaar and PAN applications to tax filing and bill payments—under one roof.
          </p>
          <p>
            Our team comprises experienced professionals who stay updated with the latest government regulations and digital portal updates. This ensures that your applications are processed without errors, saving you valuable time and effort. We take pride in our 99% customer satisfaction rate and strive to maintain the highest standards of data privacy and security.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Happy Clients", value: "100+" },
            { label: "Services Offered", value: "100+" },
            { label: "Success Rate", value: "99%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
