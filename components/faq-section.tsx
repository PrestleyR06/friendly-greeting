"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide property maintenance and cleaning services across the UK, with a primary focus on major cities and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a free quote through our contact form, by calling +44 7310 471562, or via WhatsApp. We typically respond within 24 hours with a detailed proposal.",
  },
  {
    question: "Do you provide services for Airbnb properties?",
    answer: "Yes, we specialize in Airbnb and serviced accommodation turnovers. We offer quick, efficient property preparation including cleaning, linen changes, and property checks to ensure your guests have a perfect arrival.",
  },
  {
    question: "What is included in end of tenancy cleaning?",
    answer: "Our end of tenancy cleaning covers every room comprehensively including deep cleaning of kitchens and bathrooms, carpet cleaning, window cleaning, and detailed cleaning of all fixtures and fittings to meet deposit return standards.",
  },
  {
    question: "Are your team members insured?",
    answer: "Yes, all our cleaning professionals are fully insured and have undergone background checks. We carry comprehensive liability insurance for your complete peace of mind.",
  },
  {
    question: "Do you provide documentation after service?",
    answer: "Absolutely. We provide photo documentation of completed work along with detailed service reports. This is particularly valuable for property managers and landlords who need records for their files.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 48-72 hours in advance for standard services. For end of tenancy or larger projects, 1 week notice is preferred. However, we do accommodate urgent requests when possible.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer: "We understand plans change. We request 24 hours notice for rescheduling or cancellations. Emergency situations are handled with flexibility and understanding.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Find answers to common questions about our property care services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-border data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
