"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const allServices = [
  { category: "Identity Services", title: "Aadhaar Enrollment" },
  { category: "Identity Services", title: "Aadhaar Correction / Update" },
  { category: "Identity Services", title: "Mobile Number Update in Aadhaar" },
  { category: "Identity Services", title: "Biometric Update" },
  { category: "Identity Services", title: "PAN Card Application" },
  { category: "Identity Services", title: "PAN Card Correction" },
  { category: "Identity Services", title: "Voter ID Services" },
  { category: "Travel & License Services", title: "Passport Assistance" },
  { category: "Travel & License Services", title: "Driving License Services" },
  { category: "Certificate Services", title: "Marriage Registration" },
  { category: "Certificate Services", title: "Birth Certificate Application" },
  { category: "Certificate Services", title: "Death Certificate Application" },
  { category: "Certificate Services", title: "Caste Certificate" },
  { category: "Financial & Insurance Services", title: "LIC Premium Payment" },
  { category: "Financial & Insurance Services", title: "National Pension System (NPS)" },
  { category: "Financial & Insurance Services", title: "Life Insurance" },
  { category: "Financial & Insurance Services", title: "Health Insurance" },
  { category: "Financial & Insurance Services", title: "Motor Insurance" },
  { category: "Tax & GST Services", title: "Income Tax Filing" },
  { category: "Tax & GST Services", title: "GST Registration" },
  { category: "Tax & GST Services", title: "GST Return Filing" },
  { category: "Healthcare & Welfare", title: "Ayushman Bharat Card" },
  { category: "Healthcare & Welfare", title: "ABHA Card" },
  { category: "Healthcare & Welfare", title: "eShram Card" },
  { category: "Healthcare & Welfare", title: "PM Kisan Registration" },
  { category: "Bill Payment & Recharge", title: "Electricity Bill Payment" },
  { category: "Bill Payment & Recharge", title: "Mobile Recharge" },
  { category: "Bill Payment & Recharge", title: "DTH Recharge" },
  { category: "Bill Payment & Recharge", title: "Water Bill Payment" },
  { category: "Bill Payment & Recharge", title: "Gas Booking" },
  { category: "Legal & Documentation", title: "RTI Filing" },
  { category: "Legal & Documentation", title: "Affidavit" },
  { category: "Legal & Documentation", title: "Agreement Drafting" },
  { category: "Legal & Documentation", title: "Legal Notice" },
  { category: "Legal & Documentation", title: "Police Clearance Application" },
]

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredServices = allServices.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(filteredServices.map(s => s.category)))

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            All <span className="text-primary">Services</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for a service... e.g., PAN Card, Aadhaar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl border-gray-300 shadow-sm text-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-12">
          {categories.length === 0 && (
            <div className="text-center text-gray-500 py-12 text-lg">
              No services found for "{searchQuery}". Please try another keyword.
            </div>
          )}

          <AnimatePresence>
            {categories.map((category) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredServices
                    .filter(s => s.category === category)
                    .map((service, index) => (
                      <motion.div
                        key={service.title}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-full hover:border-primary/50 group bg-white cursor-pointer hover:shadow-md transition-all">
                          <CardHeader className="p-4">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
