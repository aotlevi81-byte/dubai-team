'use client'

import { useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { FaTelegram } from 'react-icons/fa6'
import Link from 'next/link'

const team = [
  {
    name: 'Jan hana',
    image: '/team-1.jpg',
    role: 'CEO',
    telegram_link: 'https://t.me/hhhsjwjkwkwkkww'
  },
  {
    name: 'Kai simon',
    image: '/team-2.jpg',
    role: 'COO',
    telegram_link: 'https://t.me/JeinCMC'
  },
  {
    name: 'Mark Jones',
    image: '/team-3.jpg',
    role: 'CMO',
    telegram_link: 'https://t.me/marksswwb'
  },
  {
    name: 'Alex dan',
    image: '/team-4.jpg',
    role: 'CIO',
    telegram_link: 'https://t.me/alexdansnsn'
  }
]

export function TeamSection() {
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
    <section ref={sectionRef} id="team" className="py-24 lg:py-32">
      <div className="container">
        <div className="scroll-reveal mb-16 space-y-4">
          <div className="border-brand/30 bg-brand/5 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-brand text-sm font-medium">OUR EXPERTS</span>
          </div>

          <div className="flex items-end justify-between">
            <h2 className="text-primary text-4xl leading-tight font-bold lg:text-6xl">
              Meet our
              <br />
              <span className="text-brand">Creative team</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <MemberCard key={member.name} index={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({
  image,
  name,
  role,
  telegram_link,
  index
}: {
  name: string
  image: string
  role: string
  telegram_link: string
  index: number
}) {
  return (
    <div
      key={index}
      className="scroll-reveal group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
        <img
          src={image || '/placeholder.svg'}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Button
          size="sm"
          className="bg-brand/80 text-primary from-background hover:bg-brand absolute right-4 bottom-4 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline-flex"
          asChild
        >
          <Link href={telegram_link} target="_blank">
            <FaTelegram className="mr-1 h-4 w-4" />
            Telegram
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-primary group-hover:text-brabg-brand text-xl font-bold transition-colors">
            {name}
          </h3>
          <p className="text-primary/60">{role}</p>
        </div>

        <Button
          size="sm"
          className="bg-brand/80 text-primary hover:bg-brand absolute right-4 bottom-4 duration-300 sm:hidden"
          asChild
        >
          <Link href={telegram_link} target="_blank">
            <FaTelegram className="mr-1 h-4 w-4" />
            Telegram
          </Link>
        </Button>
      </div>
    </div>
  )
}
