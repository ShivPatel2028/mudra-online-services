"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ramesh Patel",
    service: "PAN Card Application",
    rating: 5,
    text: "Very fast service! I received my PAN card within 2 weeks. The staff was very helpful and guided me through the entire process. Highly recommended.",
  },
  {
    name: "Sneha Desai",
    service: "Aadhaar Update",
    rating: 5,
    text: "Mudra Online Services made updating my Aadhaar details so easy. I didn't have to wait in long queues. Excellent and professional service.",
  },
  {
    name: "Vikram Singh",
    service: "Income Tax Filing",
    rating: 5,
    text: "I have been filing my IT returns through them for 3 years now. Very transparent, secure, and they always ensure I get my work done on time.",
  },
]

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
        <Quote className="w-96 h-96" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-secondary">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Read reviews from our satisfied customers in Vadodara.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0, 
                  x: activeIndex === index ? 0 : -50,
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-white/60">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-secondary w-8" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
