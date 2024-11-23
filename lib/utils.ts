import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface PageProps {
  children: React.ReactNode
  className?: string
  id: string
}

export const navItems = [
  { name: '首页', href: '#home' },
  { name: '关于', href: '#about' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
]

export const skills = [
  { name: 'JavaScript / TypeScript', level: 100 },
  { name: 'React / NextJS', level: 100 },
  { name: 'C# / .NET', level: 80 },
  { name: 'Svelte', level: 60 },
  { name: 'C++', level: 80 },
  { name: 'Python', level: 80 },
]

export const experiences = [
  {
    period: "2022 - Present",
    company: "Company Name",
    title: "Senior Frontend Developer",
    description: "负责公司核心产品的前端开发，使用 React 和 TypeScript 构建现代化的 Web 应用。",
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  // ... 其他经历
] 