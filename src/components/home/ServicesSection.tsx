"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText, CreditCard, Landmark, Stethoscope, Zap, Scale } from "lucide-react"

const services = [
  {
    title: "Identity Services",
    description: "Aadhaar Enrollment, PAN Card Application, Voter ID Services, etc.",
    icon: <FileText className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Tax & GST Services",
    description: "Income Tax Filing, GST Registration, and GST Return Filing.",
    icon: <Landmark className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Financial & Insurance",
    description: "Life, Health, Motor Insurance, and Pension Services (NPS).",
    icon: <CreditCard className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Healthcare & Welfare",
    description: "Ayushman Bharat Card, ABHA Card, Government Welfare Schemes.",
    icon: <Stethoscope className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Bill Payment & Recharge",
    description: "Electricity, Water, Mobile, DTH Recharge, and Gas Booking.",
    icon: <Zap className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Legal & Documentation",
    description: "RTI Filing, Affidavit, Agreement Drafting, Legal Notice.",
    icon: <Scale className="w-10 h-10 text-secondary" />,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 relative" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Explore a wide range of digital and government services carefully curated for your convenience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 group bg-white cursor-pointer">
                <CardHeader>
                  <div className="mb-4 p-4 rounded-2xl bg-primary/5 w-fit group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
