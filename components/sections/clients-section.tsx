'use client'

const clients = [
  { name: 'Chainlink', logo: 'chainlink.jpg' },
  { name: 'Polkadot', logo: 'polkadot.jpg' },
  { name: 'NEAR PROTOCOL', logo: 'near-protocol.jpg' },
  { name: 'Pepe', logo: 'pepe.jpg' },
  { name: 'Pi network', logo: 'pi-network.jpg' },
  { name: 'Globiance exchange', logo: 'globiance-exchange.jpg' },
  { name: 'Vcdao', logo: 'vcdao.jpg' },
  { name: 'Bitfinex', logo: 'bitfinex.jpg' },
  { name: 'Shiba inu', logo: 'shiba-inu.jpg' },
  { name: 'Zcash', logo: 'zcash.jpg' },
  { name: 'Nexo', logo: 'nexo.jpg' }
]

import { useEffect, useRef, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            setIsVisible(true)
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
    <section ref={sectionRef} id="clients" className="py-24 lg:py-32">
      <div className="container">
        <div className="scroll-reveal mb-16 space-y-4">
          <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-brand text-sm font-medium">CLIENTS</span>
          </div>

          <h2 className="text-primary text-4xl leading-tight font-bold lg:text-6xl">
            Our respected Clients
            <br />
            <span className="text-brand">/ Partnerships</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
            duration: 10000
          }}
          plugins={[
            Autoplay({
              delay: 0,
              active: true,
              stopOnInteraction: false,
              stopOnMouseEnter: false
            })
          ]}
          className="w-full px-2 sm:px-4 lg:px-6"
        >
          <CarouselContent className="-ml-4 py-4">
            {clients.map((client, index) => (
              <ClientCard
                key={client.name}
                index={index}
                isVisible={isVisible}
                {...client}
              />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

function ClientCard({
  index,
  isVisible,
  logo,
  name
}: {
  isVisible: boolean
  index: number
  name: string
  logo: string
}) {
  return (
    <CarouselItem className="group flex aspect-square basis-1/2 flex-col items-center justify-start gap-y-2 pl-4 select-none sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
      <div
        className={cn(
          'border-brand/20 hover:border-brand/50 relative flex aspect-square h-32 w-full flex-1 cursor-pointer items-center justify-center rounded-xl border bg-gradient-to-br from-zinc-950 to-black p-2 transition-all duration-300',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
        style={{
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transitionDelay: `${index * 0.1}s`
        }}
      >
        <Image
          loading="lazy"
          src={`/clients/${logo}`}
          alt={name}
          fill
          sizes="200px"
          className="aspect-square h-full w-full rounded-xl object-cover object-center mix-blend-difference select-none"
        />
      </div>

      <p className="group-hover:text-brand text-primary shrink-0 text-center font-medium">
        {name}
      </p>
    </CarouselItem>
  )
}
