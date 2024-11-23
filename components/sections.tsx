"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TextAnimate, 
  PageLayout, 
  ScrollReveal, 
  ParallaxScroll,
  ParticlesBackground,
  GradientText,
  AnimatedBackground,
  MouseLight 
} from './ui/effects'

// Hero Section
export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <ParticlesBackground />
      <AnimatedBackground />
      <MouseLight />
      
      <div className="relative z-10 text-center">
        <TextAnimate text="Hi, I'm" type="title" />
        <GradientText text="Your Name" className="text-4xl md:text-6xl font-bold block mt-2" />
        <TextAnimate 
          text="Full Stack Developer & UI/UX Designer" 
          type="subtitle"
          className="mt-4"
        />
      </div>
    </section>
  )
}

// About Section
export const About = () => {
  return (
    <PageLayout id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ParallaxScroll>
          <div className="space-y-6">
            <TextAnimate text="About Me" type="title" />
            <motion.p className="text-gray-300">
              {/* Your about text */}
            </motion.p>
          </div>
        </ParallaxScroll>
      </div>
    </PageLayout>
  )
}

// Skills Section
export const Skills = () => {
  const skills = [
    { name: 'JavaScript / TypeScript', level: 100 },
    { name: 'React / NextJS', level: 100 },
    { name: 'C# / .NET', level: 80 },
    // ... other skills
  ]

  return (
    <PageLayout id="skills">
      <div className="space-y-12">
        <TextAnimate text="Skills" type="title" className="text-center" />
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

// Experience Section
export const Experience = () => {
  return (
    <PageLayout id="experience">
      <div className="space-y-12">
        <TextAnimate text="Experience" type="title" className="text-center" />
        {/* Experience content */}
      </div>
    </PageLayout>
  )
}

// Projects Section
export const Projects = () => {
  return (
    <PageLayout id="projects">
      <div className="space-y-12">
        <TextAnimate text="Projects" type="title" className="text-center" />
        {/* Projects content */}
      </div>
    </PageLayout>
  )
}

// Contact Section
export const Contact = () => {
  return (
    <PageLayout id="contact">
      <div className="space-y-12">
        <TextAnimate text="Contact" type="title" className="text-center" />
        {/* Contact content */}
      </div>
    </PageLayout>
  )
} 