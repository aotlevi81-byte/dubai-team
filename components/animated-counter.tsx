'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounter = () => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCounter = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentCount = Math.floor(easeOutExpo * end)
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <div ref={counterRef} className={className}>
      {count}
      {suffix}
    </div>
  )
}
