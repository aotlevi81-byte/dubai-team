'use client'

import Image from 'next/image'
import { type Service } from './data'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { TrendingServices } from './content/trending-services'
import { ServiceContent } from './content'
import { ScreenshotGrid } from './screenshot-grid'

interface ServiceCardProps extends Service {
  index: number
}

export function ServiceCard({
  icon,
  id,
  label,
  screenshots,
  index
}: ServiceCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="scroll-reveal group flex w-full cursor-pointer flex-col items-center justify-center gap-y-4"
          style={{ animationDelay: `${index * 0.1}s` }}
          role="link"
          title={label}
        >
          <div className="border-brand/20 group-hover:border-brand/70 group-hover:shadow-brand/40 flex aspect-video w-full transform items-center justify-center rounded-2xl border p-8 transition-all group-hover:scale-105 group-hover:shadow-md">
            <Image
              src={icon}
              alt={label}
              className="shrink-0 transform object-cover transition-transform group-hover:scale-110"
              width={56}
              height={56}
            />
          </div>
          <h3 className="text-primary group-hover:text-brand line-clamp-1 text-sm font-medium capitalize transition-colors">
            {label}
          </h3>
        </div>
      </DialogTrigger>
      <DialogContent
        aria-describedby={id}
        className="dark scroll-hidden @container max-h-[calc(100dvh-120px)] w-full max-w-[90%]! overflow-y-auto p-0 leading-[30px] font-[200] md:max-w-3xl! lg:max-w-4xl! xl:max-w-5xl!"
      >
        <DialogHeader className="hidden">
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <ScreenshotGrid screenshots={screenshots} id={id} />
        <ServiceContent id={id} />
      </DialogContent>
    </Dialog>
  )
}
