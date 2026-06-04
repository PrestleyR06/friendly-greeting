"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, ArrowRight } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"

const trustIndicators = [
  "Quality Controlled",
  "Fully Insured",
  "Professional Team",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Elevating Property Standards
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              <span className="text-primary">Premium Property Care</span>
              <br />
              <span className="text-foreground">That Protects Your Investment</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Professional property maintenance and cleaning excellence. Structured, 
              quality-controlled services for real estate, Airbnb, and commercial properties.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {indicator}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-12 text-base font-medium group"
                asChild
              >
                <a href="#contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-12 text-base font-medium border-foreground/20 hover:bg-foreground/5"
                asChild
              >
                <a href="tel:+447310471562">
                  <Phone className="mr-2 h-4 w-4" />
                  +44 7310 471562
                </a>
              </Button>
            </motion.div>

            {/* Phone Number Prominent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <span className="text-sm">Call us today:</span>
              <a 
                href="tel:+447310471562" 
                className="text-primary font-semibold hover:underline"
              >
                +44 7310 471562
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Before/After Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
