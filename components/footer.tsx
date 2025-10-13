import { siteConfig } from '@/lib/site-config'
import Link from 'next/link'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import Image from 'next/image'
import { MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="border-brand/20 border-t py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="group flex items-center gap-3">
              <div className="relative flex size-6 items-center justify-center rounded-full">
                <Image
                  src={siteConfig.logo.href}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="24px, (max-width: 640px): 32px"
                  className="object-cover"
                />
              </div>
              <span className="text-primary group-hover:text-brand text-xl font-bold whitespace-nowrap transition-colors">
                {siteConfig.logo.label}
              </span>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              We provide legit marketing services by experienced marketing team
              Dubai team
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-bold">Menu</h3>
            <ul className="space-y-2">
              {siteConfig.internal_links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary/60 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-bold">Contact</h3>
            <ul className="flex items-center gap-x-6">
              <li>
                <Link
                  href={siteConfig.social_links.x}
                  target="_blank"
                  className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
                >
                  <FaXTwitter className="size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social_links.whatsapp}
                  target="_blank"
                  className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
                >
                  <FaWhatsapp className="size-5" />
                </Link>
              </li>

              <li>
                <Link
                  href={siteConfig.social_links.telegram}
                  target="_blank"
                  className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
                >
                  <FaTelegramPlane className="size-5" />
                </Link>
              </li>

              <li>
                <Link
                  href={siteConfig.social_links.instagram}
                  target="_blank"
                  className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
                >
                  <FaInstagram className="size-5" />
                </Link>
              </li>

              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  target="_blank"
                  className="text-muted-foreground hover:text-brand transform transition-all hover:scale-110"
                >
                  <MailIcon className="size-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-brand/20 text-primary/60 mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; 2025 {siteConfig.title} Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
