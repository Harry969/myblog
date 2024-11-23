"use client"

import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { Particles } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

// 粒子背景效果
export const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            className="absolute inset-0 -z-10"
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
            }}
        />
    )
}

// 动态背景效果
export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* 动态渐变背景 */}
            <div className="absolute inset-0 gradient-animation opacity-30"></div>

            {/* 动态网格 */}
            <div className="absolute inset-0 grid-background opacity-10"></div>

            {/* 浮动元素 */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[100px] h-[100px] rounded-full bg-purple-500/10"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}

// 渐变文字效果
export const GradientText: React.FC<{
    text: string
    className?: string
}> = ({ text, className = "" }) => {
    return (
        <motion.span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.span>
    )
} 