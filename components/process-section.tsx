"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, CalendarDays, Sparkles, ClipboardCheck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Request a Quote",
    description: "Contact us with your property details and requirements. We respond within 24 hours.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Schedule Service",
    description: "Choose a convenient time that works for you. Flexible scheduling options available.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Professional Execution",
    description: "Our trained team arrives on time and completes the work to the highest standards.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Every job is inspected and documented with photos for your records.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Property Ready",
    description: "Your property is cleaned, inspected, and ready for use or handover.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Simple, Structured,{" "}
            <span className="text-primary">Seamless</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A clear, documented process from initial contact to completed service 
            ensures you know exactly what to expect at every stage.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Step Number */}
                <span className="text-xs font-semibold text-primary mb-2">{step.number}</span>
                
                {/* Title */}
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
