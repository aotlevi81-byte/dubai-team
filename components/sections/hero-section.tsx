'use client'

import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
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
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="border-brand animate-float absolute top-20 left-10 h-32 w-32 rotate-45 border-2" />
        <div
          className="border-brand animate-float absolute top-40 right-20 h-24 w-24 rotate-12 border-2"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="border-brand animate-float absolute bottom-40 left-1/4 h-40 w-40 -rotate-12 border-2"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="border-brand animate-rotate-3d absolute top-1/3 right-1/3 h-20 w-20 rotate-45 border-2"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12 pt-8 text-center">
          <div className="scroll-reveal border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-6 py-3">
            <span className="text-brand text-sm font-medium uppercase">
              WE ARE {siteConfig.title} MARKETING
            </span>
            <ArrowUpRight className="text-brand h-4 w-4" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-12 lg:flex-row">
            <div className="scroll-reveal space-y-6 text-center lg:text-left">
              <h1 className="text-4xl leading-tight font-bold text-balance capitalize md:text-5xl lg:text-6xl">
                We provide
                <span className="text-brand"> bullish marketing</span>
                <br />
                services by experienced marketing team
                <br />
                <span className="text-brand uppercase">Dubai team</span>
              </h1>

              <p className="text-primary/70 max-w-3xl text-lg leading-relaxed max-lg:mx-auto md:text-xl">
                At the core of our team is a connection that surpasses
                collaboration — it&apos;s unity. For us, being part of the Dubai
                team means standing together with loyalty, respect, and
                unwavering support.
              </p>

              <p className="text-primary/60 max-w-2xl text-base leading-relaxed max-lg:mx-auto md:text-lg">
                When you work with us, you become one of us. We treat you like
                family, committed to your success and always having your back.
              </p>
            </div>

            <div className="scroll-reveal flex flex-wrap justify-center gap-12 pt-8 lg:flex-1 lg:shrink-0">
              <div className="space-y-2">
                <div className="text-brand text-5xl font-bold md:text-6xl">
                  4+
                </div>
                <div className="text-primary/60 text-sm">
                  years of experience
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-brand text-5xl font-bold md:text-6xl">
                  1000+
                </div>
                <div className="text-primary/60 text-sm">
                  projects worked on
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
