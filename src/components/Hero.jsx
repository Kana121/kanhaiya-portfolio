import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Pulse Rings */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white/10 rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/15 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading with Type Animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              <span className="block">Kanhaiya</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                R. Dharu
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold min-h-[60px]">
              <TypeAnimation
                sequence={[
                  'Java Full-stack Developer',
                  2000,
                  'Spring Boot Specialist',
                  2000,
                  'React.js Expert',
                  2000,
                  'Cloud Solutions Architect',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 text-blue-100 font-light"
          >
            Crafting <span className="font-semibold text-white">scalable solutions</span> with{' '}
            <span className="font-semibold text-white">3.1+ years</span> of excellence in{' '}
            <span className="font-semibold text-white">banking & healthcare</span> domains
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👋
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#experience"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <motion.span
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "3.1+", label: "Years Experience", emoji: "💼" },
              { number: "10+", label: "Projects Delivered", emoji: "⭐" },
              { number: "2", label: "Expert Domains", emoji: "🎯" },
              { number: "100%", label: "Client Satisfaction", emoji: "❤️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500"
              >
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.emoji}
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium">
                  {stat.label}
                </div>
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-blue-200"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-white/50 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {['☕', '⚛️', '🐳', '☁️', '🚀', '🗃️'].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;