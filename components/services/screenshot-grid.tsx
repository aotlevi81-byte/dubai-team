'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import Image from 'next/image'

interface ScreenshotGridProps {
  id: string
  screenshots: { image_url: string; title: string }[]
}

export const ScreenshotGrid = ({ id, screenshots }: ScreenshotGridProps) => {
  return (
    <div className="space-y-8 p-4 py-6 sm:p-6 md:p-8 @lg:max-w-5xl">
      <div className="grid grid-cols-1 gap-2 max-sm:gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {screenshots.map(({ image_url, title }) => (
          <div
            key={title}
            title={title}
            className="group flex flex-col items-center transition hover:shadow-lg"
          >
            <ScreenshotImage
              title={title}
              src={`/services/screens/${id}/${image_url}`}
            >
              <img
                src={`/services/screens/${id}/${image_url}`}
                alt={title}
                className="group-hover:bg-brand mb-3 h-32 w-full rounded-lg object-cover p-1 transition-colors"
              />
            </ScreenshotImage>
            <span className="text-primary group-hover:text-brand mt-2 text-center text-base font-medium">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenshotImage({
  src,
  title,
  children
}: {
  src: string
  title: string
  children: React.ReactNode
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (isMobile) return children

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[500px] w-full max-w-3xl! p-0 px-6 py-8">
        <DialogHeader aria-describedby={title} className="hidden">
          <DialogTitle aria-describedby={title}>{title}</DialogTitle>
        </DialogHeader>

        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            sizes="650px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
