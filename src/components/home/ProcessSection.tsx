"use client"

import { motion } from "framer-motion"
import { MapPin, FileUp, Cpu, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Visit Our Center",
    description: "Step in or contact us online with your requirement.",
    icon: <MapPin className="w-8 h-8 text-white" />,
  },
  {
    title: "Submit Documents",
    description: "Provide the necessary documents securely.",
    icon: <FileUp className="w-8 h-8 text-white" />,
  },
  {
    title: "Application Processing",
    description: "Our experts process your application fast.",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
  {
    title: "Service Delivered",
    description: "Receive your certificate, receipt, or service update.",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Our Simple <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Get your work done in four easy steps without any hassle.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-0 opacity-20 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step {index + 1}</h3>
                <h4 className="text-lg font-semibold text-primary mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
