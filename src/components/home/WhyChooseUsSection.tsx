"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Users, BadgeCheck, PhoneCall, Handshake } from "lucide-react"

const reasons = [
  {
    title: "Fast Service",
    description: "We value your time. Experience quick processing and minimum wait times.",
    icon: <Clock className="w-8 h-8 text-primary" />,
  },
  {
    title: "Reliable Assistance",
    description: "Accurate guidance and error-free application processing for peace of mind.",
    icon: <Handshake className="w-8 h-8 text-primary" />,
  },
  {
    title: "Secure Processing",
    description: "Your personal data and documents are handled with the highest security standards.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Experienced Staff",
    description: "Our knowledgeable professionals are always ready to assist you effectively.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Trusted CSC Center",
    description: "An authorized Common Service Center for reliable government services.",
    icon: <BadgeCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Customer Support",
    description: "Dedicated support to answer all your queries before and after the service.",
    icon: <PhoneCall className="w-8 h-8 text-primary" />,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Why Choose <span className="text-primary">Us?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            We are committed to delivering the best digital service experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
