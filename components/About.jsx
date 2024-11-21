import { motion } from 'framer-motion';

const skills = [
  {
    category: '前端开发',
    items: ['React', 'Vue', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    category: '后端开发',
    items: ['Node.js', 'Python', 'Java', 'Spring Boot', 'Express']
  },
  {
    category: '数据库',
    items: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL']
  },
  {
    category: '开发工具',
    items: ['Git', 'Docker', 'VS Code', 'Webpack', 'Linux']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            关于我
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我是一名全栈开发工程师，热衷于创造优秀的用户体验和高性能的应用程序。
            擅长前端开发和UI设计，同时具备扎实的后端开发能力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 