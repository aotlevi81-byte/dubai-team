'use client'

import Link from 'next/link'
import { ArrowRightIcon, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-brand/20 fixed top-0 right-0 left-0 z-50 border-b bg-black/60 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex size-8 items-center justify-center rounded-full transition-transform group-hover:scale-105">
              <Image
                src={siteConfig.logo.href}
                alt={siteConfig.logo.alt}
                fill
                sizes="32px, (max-width: 640px): 48px"
                className="object-cover"
              />
            </div>
            <span className="text-primary group-hover:text-brand text-xl font-bold tracking-tight uppercase transition-colors">
              {siteConfig.logo.label}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.internal_links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-brand group flex items-center gap-x-0.5 text-sm font-medium transition-colors"
              >
                <ArrowRightIcon className="size-4 -rotate-[30deg] transform stroke-3 transition-transform group-hover:rotate-0" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={siteConfig.social_links.x}
              target="_blank"
              className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
            >
              <FaXTwitter className="size-5" />
            </Link>

            <Link
              href={siteConfig.social_links.whatsapp}
              target="_blank"
              className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
            >
              <FaWhatsapp className="size-5" />
            </Link>

            <Link
              href={siteConfig.social_links.telegram}
              target="_blank"
              className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
            >
              <FaTelegramPlane className="size-5" />
            </Link>

            <Link
              href={siteConfig.social_links.instagram}
              target="_blank"
              className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
            >
              <FaInstagram className="size-5" />
            </Link>
          </div>

          <Button
            variant="transparent"
            size="icon"
            className="text-primary lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </Button>
        </div>

        {isOpen && (
          <div className="border-brand/20 border-t py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {siteConfig.internal_links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-brand group flex items-center gap-x-4 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRightIcon className="size-4 -rotate-[30deg] transform stroke-3 transition-transform group-hover:rotate-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
