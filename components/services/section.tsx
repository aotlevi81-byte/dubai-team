'use client'

import { useEffect, useRef } from 'react'
import { ServiceCard } from './card'
import { services } from './data'

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="scroll-reveal mb-16 space-y-4">
          <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-brand text-sm font-medium">
              WHAT WE OFFER
            </span>
          </div>

          <h2 className="text-primary text-4xl leading-tight font-bold lg:text-6xl">
            What we can do for
            <br />
            <span className="text-brand">Our Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
