"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/kleanera-logo.png"
              alt="Kleanera"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          {/* Phone */}
          <a 
            href="tel:+447310471562" 
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-medium">+44 7310 471562</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kleanera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
