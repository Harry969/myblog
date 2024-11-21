import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: '个人博客系统',
    description: '基于 Next.js 和 Tailwind CSS 构建的现代化个人博客系统，支持暗色模式和响应式设计。',
    image: '/images/blog.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog.com'
  },
  {
    title: '在线商城平台',
    description: '全栈电商项目，整合支付系统、购物车、用户管理等功能，采用微服务架构。',
    image: '/images/shop.jpg',
    tags: ['Vue', 'Spring Boot', 'MySQL', 'Docker'],
    github: 'https://github.com/yourusername/shop',
    demo: 'https://your-shop.com'
  },
  {
    title: 'AI 图像处理工具',
    description: '基于深度学习的图像处理应用，支持风格迁移、图像增强等功能。',
    image: '/images/ai.jpg',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/yourusername/ai-image',
    demo: 'https://your-ai-tool.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            项目展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            这里展示了我的一些个人项目，涵盖了前端、后端和人工智能等多个领域
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden group">
                {/* 项目预览图 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-gray-800"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-gray-800"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 