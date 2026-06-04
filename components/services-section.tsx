"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Home, 
  Sparkles, 
  Building,
  Brush,
  TreePine,
  Waves
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "End of Tenancy Cleaning",
    description: "Comprehensive deep cleaning to ensure your property is ready for the next tenant, meeting all deposit return standards.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough, intensive cleaning that reaches every corner, perfect for periodic maintenance or special occasions.",
  },
  {
    icon: Building,
    title: "Airbnb Turnover",
    description: "Quick, efficient property turnovers ensuring your rental is guest-ready with fresh linens and spotless spaces.",
  },
  {
    icon: Brush,
    title: "Communal Cleaning",
    description: "Regular maintenance of shared spaces, hallways, and common areas in residential and commercial buildings.",
  },
  {
    icon: TreePine,
    title: "Exterior Cleaning",
    description: "Pressure washing, window cleaning, and facade maintenance to keep your property looking its best.",
  },
  {
    icon: Waves,
    title: "Carpet Cleaning",
    description: "Professional carpet and upholstery cleaning using advanced extraction methods for deep, lasting results.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Premium Property{" "}
            <span className="text-primary">Care Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive cleaning and maintenance services tailored for property 
            professionals who demand consistent, quality-controlled results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
