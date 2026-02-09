"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Top navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white border-b">
        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/project" className="hover:underline">Project</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </header>

      {/* Mobile sidebar */}
      <SidebarSlider
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <nav className="flex flex-col space-y-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/project" className="hover:underline">Project</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </SidebarSlider>
    </>
  )
}
