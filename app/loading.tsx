'use client'

import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'

export default function loading() {
  return (
    <div className="bg-primary-foreground fixed inset-0 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="relative aspect-square size-14 animate-pulse">
          <Image
            src={siteConfig.logo.href}
            alt={siteConfig.logo.alt}
            fill
            className="object-cover"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s both' }}
          />
        </div>
        <div className="flex animate-pulse items-center gap-2">
          {'DUBAI TEAM'.split('').map((letter, index) => (
            <div
              key={index}
              className="text-brand text-6xl font-bold"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="text-primary/60 mt-4 animate-pulse text-sm">
          Loading ...
        </div>
      </div>
    </div>
  )
}
