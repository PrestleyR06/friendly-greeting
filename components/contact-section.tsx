"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "End of Tenancy Cleaning",
  "Deep Cleaning",
  "Airbnb Turnover",
  "Communal Cleaning",
  "Exterior Cleaning",
  "Carpet Cleaning",
  "Other",
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you! We will be in touch shortly.")
  }

  return (
    <section id="contact" className="section-padding relative bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Request a{" "}
              <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to elevate your property standards? Fill out the form and 
              we will get back to you within 24 hours with a detailed quote.
            </p>

            {/* Phone CTA */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Prefer to call?</p>
              <a 
                href="tel:+447310471562" 
                className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                +44 7310 471562
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                Available Monday to Sunday, 8am - 8pm
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 border border-border">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 7123 456789"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Required
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Property Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property, number of rooms, and any specific requirements..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-12 text-base font-medium group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted regarding your enquiry.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
