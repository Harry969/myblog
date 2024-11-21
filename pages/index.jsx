import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiBilibili } from 'react-icons/si';
import Link from 'next/link';

const skills = {
  "前端开发": {
    items: ["React", "Vue", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "██████████"
  },
  "后端开发": {
    items: ["Node.js", "Python", "Java", "Spring Boot"],
    level: "████████░░"
  },
  "数据库": {
    items: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
    level: "████████░░"
  },
  "开发工具": {
    items: ["Git", "Docker", "VS Code", "Linux"],
    level: "██████████"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <motion.h1 
                className="text-xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                Harry
              </motion.h1>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/favorites" className="text-gray-600 hover:text-gray-900">★ Favorites</Link>
                <Link href="/code" className="text-gray-600 hover:text-gray-900">Code</Link>
                <Link href="/game" className="text-gray-600 hover:text-gray-900">Game</Link>
                <Link href="/music" className="text-gray-600 hover:text-gray-900">Music</Link>
                <Link href="/books" className="text-gray-600 hover:text-gray-900">Books</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <button className="md:hidden">
                <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-24 px-4 max-w-4xl mx-auto relative">
        {/* 个人介绍部分 */}
        <section className="mb-20 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Harry's Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">My name is:</h2>
                <h1 className="text-4xl font-bold text-orange-500 mb-6">Harry</h1>
                <h2 className="text-2xl font-bold mb-4">I'm a:</h2>
                <ul className="space-y-1 text-gray-600">
                  <li>Full Stack Developer</li>
                  <li>UI/UX Designer</li>
                  <li>Open Source Enthusiast</li>
                </ul>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600">
                  I share stories about #programming, #design, and #life on the Internet.
                </p>
                <p className="text-gray-600">
                  My stories have attracted <span className="font-semibold">10,000+</span> followers.
                </p>
                <p className="bg-orange-100/50 p-3 rounded-md text-gray-700 mt-4">
                  There are countless ways to tell a story about the world, this is mine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能展示部分 */}
        <section className="mb-20 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, { items, level }]) => (
              <div key={category} className="space-y-2">
                <h3 className="font-semibold text-lg">{category}</h3>
                <div className="font-mono text-sm">{level}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 社交媒体统计 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <SiBilibili className="w-6 h-6 text-pink-400" />
              <div>
                <h3 className="font-semibold">数字游牧人</h3>
                <p className="text-sm text-gray-500">99,883 followers • 3,821,585 views</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Through vivid narratives, I share my reflections on software engineering and technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <FaTwitter className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">Harry</h3>
                <p className="text-sm text-gray-500">12,400 followers</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              On Twitter, I share brief thoughts and updates about my latest adventures
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 