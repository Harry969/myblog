"use client"

import React from 'react'
import { Navbar } from '../components/ui/effects'
import { 
  Hero, 
  About, 
  Skills, 
  Experience, 
  Projects, 
  Contact 
} from '../components/sections'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
} 