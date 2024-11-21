import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-900'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-400'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-700'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:your.email@example.com',
    color: 'hover:text-red-500'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            联系我
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            如果您有任何问题或合作意向，欢迎随时与我联系
          </p>
        </motion.div>

        {/* 社交媒体链接 */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-gray-600 ${social.color} transition-colors`}
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>

        {/* 联系表单 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="请输入您的邮箱"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                主题
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="请输入消息主题"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                消息内容
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="请输入您的消息内容"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              发送消息
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 