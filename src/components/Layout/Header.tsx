'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Home, Calendar, Map, Users, Lightbulb, Network, HelpCircle } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/agenda', label: 'Agenda', icon: Calendar },
  { href: '/map', label: 'Mapa', icon: Map },
  { href: '/exhibitors', label: 'Expositores', icon: Users },
  { href: '/innovations', label: 'Innovaciones', icon: Lightbulb },
  { href: '/networking', label: 'Networking', icon: Network },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0E0B7C]">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="NACS Show Logo" className="h-16 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" asChild className="text-white hover:text-white hover:bg-white/10 text-2xl">
                <Link href={item.href}>
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden text-white border-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60 bg-[#0E0B7C] border-white/10">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="text-white focus:bg-white/10 focus:text-white text-lg">
                  <Link href={item.href} className="flex items-center">
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}