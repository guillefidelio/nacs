'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function SubheroSection() {
  const events = [
    { title: "Tech Conference 2023", date: "Sept 15-17", image: "tech" },
    { title: "Music Festival", date: "Oct 1-3", image: "music" },
    { title: "Food & Wine Expo", date: "Nov 5-7", image: "food" },
    { title: "Art Exhibition", date: "Dec 10-12", image: "art" },
    { title: "Sports Tournament", date: "Jan 20-22", image: "sports" },
    { title: "Business Summit", date: "Feb 14-16", image: "business" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/4.jpg"
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <CardTitle className="text-white text-xl font-bold">{event.title}</CardTitle>
                    <p className="text-white/80 text-sm">{event.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}