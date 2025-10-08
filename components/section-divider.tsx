"use client"

import { useEffect, useRef, useState } from "react"

export default function SectionDivider() {
  const dividerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    )

    if (dividerRef.current) {
      observer.observe(dividerRef.current)
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current)
      }
    }
  }, [])

  return <div ref={dividerRef} className={`section-divider ${isVisible ? "visible" : ""}`} />
}
