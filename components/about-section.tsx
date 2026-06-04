"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Eye, CheckSquare, FileText } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Building lasting relationships through consistent, dependable service.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Meticulous care in every corner, ensuring nothing is overlooked.",
  },
  {
    icon: CheckSquare,
    title: "Quality Controlled",
    description: "Rigorous inspection processes guarantee exceptional results.",
  },
  {
    icon: FileText,
    title: "Fully Documented",
    description: "Transparent reporting and documentation for complete accountability.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Kleanera
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Professional, Premium,{" "}
              <span className="text-primary">System-Driven</span> Property Care
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kleanera delivers structured property maintenance and cleaning services 
              designed specifically for real estate professionals, Airbnb hosts, and 
              commercial property managers who demand excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our system-driven approach ensures consistent, quality-controlled results 
              with complete documentation and accountability. We protect your investment 
              through meticulous attention to detail and professional standards.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Properties Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
