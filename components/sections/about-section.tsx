'use client'

import { siteConfig } from '@/lib/site-config'
import { useEffect, useRef } from 'react'
import { AnimatedCounter } from '../animated-counter'
import Image from 'next/image'

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="scroll-reveal flex justify-center lg:justify-start">
            <div className="group relative h-80 w-80">
              <div
                className="border-brand/40 absolute inset-0 rounded-full transition-transform duration-[3s] group-hover:rotate-180"
                style={{
                  borderStyle: 'dashed',
                  borderWidth: '12px'
                }}
              />

              <div className="border-brand absolute inset-8 flex items-center justify-center rounded-full border-4 bg-gradient-to-br from-black to-[#1a1a1a] transition-transform duration-300 group-hover:scale-105">
                <div className="space-y-3 text-center">
                  <Image
                    src={siteConfig.logo.href}
                    alt={siteConfig.logo.alt}
                    width={64}
                    height={64}
                    className="mx-auto object-cover"
                  />
                  <div className="text-primary text-lg font-bold">
                    Next Level
                  </div>
                  <div className="text-primary/60 text-xs">
                    PREMIUM MARKETING
                  </div>
                  <div className="text-primary/60 text-xs">EST. 2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal space-y-6">
            <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-brand text-sm font-medium uppercase">
                WE ARE {siteConfig.title} MARKETING
              </span>
            </div>

            <h2 className="text-primary text-4xl leading-tight font-bold text-balance lg:text-5xl">
              We are taking your project to the{' '}
              <span className="text-brand">Next Level</span>
            </h2>

            <p className="text-primary/70 text-lg leading-relaxed">
              {siteConfig.title} Marketing is a premium marketing service, that
              offer the most productive solutions with effective results. Our
              extensive resources and connections, at the most competitive
              prices on the market, provide our clients with a variety of
              options for their budget to make their project a success.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="group cursor-pointer space-y-2">
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  duration={2000}
                  className="text-brand text-3xl font-bold transition-transform group-hover:scale-105"
                />
                <div className="text-primary/60 text-sm">Connections</div>
              </div>

              <div className="group cursor-pointer space-y-2">
                <AnimatedCounter
                  end={900}
                  suffix="K+"
                  duration={2000}
                  className="text-brand text-3xl font-bold transition-transform group-hover:scale-105"
                />
                <div className="text-primary/60 text-sm">ETH Filled</div>
              </div>

              <div className="group cursor-pointer space-y-2">
                <AnimatedCounter
                  end={15}
                  suffix="M+"
                  duration={2000}
                  className="text-brand text-3xl font-bold transition-transform group-hover:scale-105"
                />
                <div className="text-primary/60 text-sm">Over $15M Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
