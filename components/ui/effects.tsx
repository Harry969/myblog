"use client"

import React, { useRef, useCallback, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { cn } from '../../lib/utils'

// 添加类型定义
interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
}

interface ParallaxScrollProps {
    children: React.ReactNode
    offset?: number
    className?: string
}

// 滚动显示效果
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    direction = 'up',
    delay = 0
}) => {
    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 100 }
            case 'down': return { opacity: 0, y: -100 }
            case 'left': return { opacity: 0, x: 100 }
            case 'right': return { opacity: 0, x: -100 }
            default: return { opacity: 0, y: 100 }
        }
    }

    return (
        <motion.div
            initial={getInitialPosition()}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// 视差滚动效果
export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
    children,
    offset = 50,
    className = ""
}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

// 粒子背景
export const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const options: ISourceOptions = {
        fullScreen: false,
        background: {
            color: {
                value: "#fafafa",
            },
        },
        fpsLimit: 120,
        particles: {
            color: {
                value: "#6366f1",
            },
            links: {
                color: "#6366f1",
                distance: 200,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 0.5,
                straight: false,
            },
            number: {
                value: 40,
                density: {
                    enable: true,
                },
            },
            opacity: {
                value: 0.1,
                animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                }
            },
        },
        detectRetina: true,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                }
            },
            modes: {
                grab: {
                    distance: 200,
                    links: {
                        opacity: 0.2
                    }
                }
            }
        }
    };

    return (
        <Particles
            className="absolute inset-0 -z-10"
            id="tsparticles"
            options={options}
        />
    )
}

// 渐变文字
export const GradientText = ({ text, className = "" }) => (
    <motion.span
        className={cn(
            "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500",
            "bg-[length:200%_auto] animate-gradient",
            className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        {text}
    </motion.span>
)

// 滚动进度条
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left z-50"
            style={{ scaleX }}
        />
    )
}

// 导航组件
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass-card backdrop-blur-lg py-4' : 'py-6'
            )}
        >
            {/* 导航内容 */}
        </motion.header>
    )
}

// 3D 视差滚动效果
export const ParallaxScroll3D = ({
    children,
    className = "",
    rotateX = 20,
    rotateY = 10,
    translateZ = 100
}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateX])
    const rotateY3d = useTransform(scrollYProgress, [0, 1], [0, rotateY])
    const translateZ3d = useTransform(scrollYProgress, [0, 1], [0, translateZ])

    return (
        <div ref={ref} className={`perspective-1000 ${className}`}>
            <motion.div
                style={{
                    rotateX: rotate,
                    rotateY: rotateY3d,
                    translateZ: translateZ3d,
                    transformStyle: "preserve-3d"
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

// 动态背景效果
export const AnimatedBackground = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        // 只在客户端设置尺寸
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 gradient-animation opacity-30" />
            <div className="absolute inset-0 grid-background opacity-10" />
            {dimensions.width > 0 && Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[100px] h-[100px] rounded-full bg-purple-500/10"
                    initial={{
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                    }}
                    animate={{
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}

// 鼠标光效
export const MouseLight = () => {
    const [isVisible, setIsVisible] = useState(false)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const updateMousePosition = (e: globalThis.MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', updateMousePosition)
        setIsVisible(true)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-30"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
            }}
        />
    )
}

// 加 Layout 组件
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-black">
            <main>{children}</main>
        </div>
    )
}

// 添加 PageLayout 组件
export const PageLayout: React.FC<{
    children: React.ReactNode
    className?: string
    id: string
}> = ({ children, className = "", id }) => {
    return (
        <section
            id={id}
            className={`min-h-screen w-full flex flex-col items-center justify-center px-4 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl w-full mx-auto"
            >
                {children}
            </motion.div>
        </section>
    )
}

// 添加 TextAnimate 组件
export const TextAnimate: React.FC<{
    text: string
    className?: string
    type?: "title" | "subtitle"
}> = ({ text, className = "", type = "title" }) => {
    return (
        <motion.div
            className={`${className} ${type === "title" ? "text-4xl font-bold" : "text-xl"
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.div>
    )
} 