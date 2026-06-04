"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  CalendarCheck,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Clock,
  Users
} from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: "Predictable Scheduling",
    description: "Reliable, on-time service you can count on for every appointment.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Controlled",
    description: "Rigorous inspection checklists ensure consistent, exceptional results.",
  },
  {
    icon: FileText,
    title: "Fully Documented",
    description: "Complete photo documentation and reports for your records.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable Service",
    description: "Clear communication and ownership at every stage of the process.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Quick turnaround times to meet your property management needs.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Background-checked, uniformed teams with specialized training.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="section-padding relative bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Structured, Premium,{" "}
            <span className="text-primary">System-Driven</span> Property Care
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We go beyond traditional cleaning to deliver a predictable, accountable, 
            and documented service experience that property professionals trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100%", label: "Satisfaction Guarantee" },
            { value: "24h", label: "Response Time" },
            { value: "500+", label: "Happy Clients" },
            { value: "5 Star", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
