import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      link: "mailto:kanhaiya.r.dharu@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "📞",
      label: "Phone",
      link: "tel:+919182207980",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      link: "https://wa.me/919182207980",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      link: "https://linkedin.com/in/kanhaiya-dharu",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🐙",
      label: "GitHub",
      link: "https://github.com/kanhaiya-dharu",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Kanhaiya R. Dharu
              </motion.h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Java Full-stack Developer & Freelancer
              </p>
              <p className="text-gray-400 max-w-md">
                Crafting scalable solutions with cutting-edge technologies. 
                Let's build something amazing together!
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center justify-center lg:justify-start gap-2 group"
                    >
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="text-blue-400"
                      >
                        →
                      </motion.span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="text-center lg:text-right">
              <h4 className="text-xl font-semibold mb-6 text-white">Let's Connect</h4>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      x: method.link.startsWith('http') ? -5 : 0
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center lg:justify-end gap-3 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm">{method.label}</span>
                    <motion.span
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5
                      }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-sm shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {method.icon}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: "3.1+", label: "Years Exp", icon: "💼" },
              { number: "10+", label: "Projects", icon: "🚀" },
              { number: "2", label: "Domains", icon: "🎯" },
              { number: "100%", label: "Satisfaction", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg">
                © {currentYear} Kanhaiya R. Dharu. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Crafted with ❤️ and ☕
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Start a Project</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Button for Quick Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        >
          ↑
        </motion.span>
      </motion.button>
    </footer>
  );
};

export default Footer;