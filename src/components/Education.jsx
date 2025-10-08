import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3
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
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-40 left-20 w-28 h-28 bg-cyan-200/30 rounded-full blur-2xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div
            variants={textVariants}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a strong foundation for technological innovation and excellence
            </p>
          </motion.div>

          {/* Main Education Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="relative max-w-4xl mx-auto group"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-blue-50/50 text-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
              
              {/* Shine Effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={isInView ? { x: "200%", opacity: [0, 0.4, 0] } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -z-5"
              />
              
              {/* Cap Icon */}
              <motion.div
                variants={iconVariants}
                className="relative mb-8"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="text-6xl sm:text-7xl mb-4"
                >
                  🎓
                </motion.div>
                
                {/* Glow Effect */}
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 -z-10"
                />
              </motion.div>

              {/* Education Content */}
              <motion.div
                variants={textVariants}
                className="space-y-6"
              >
                {/* Degree */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                    (B.Tech)
                  </p>
                </div>

                {/* Specialization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg"
                >
                  <span>⚡</span>
                  <span>Electrical Engineering</span>
                  <span>⚡</span>
                </motion.div>

                {/* Institution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 }}
                  className="space-y-2"
                >
                  <p className="text-lg sm:text-xl text-gray-600 font-medium">
                    Matoshri Pratishthan's School of Engineering
                  </p>
                  <p className="text-gray-500 text-sm">
                    Degree • Engineering • Technology Foundation
                  </p>
                </motion.div>

                {/* Timeline Progress */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2 }}
                  className="pt-6"
                >
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Education Journey</span>
                    <span>Completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      variants={timelineVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Key Learnings */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.4 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
                >
                  {[
                    { icon: "🔌", title: "Electrical Systems", desc: "Power & Control" },
                    { icon: "💡", title: "Innovation", desc: "Creative Solutions" },
                    { icon: "📊", title: "Analysis", desc: "Technical Planning" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-center group/item"
                    >
                      <div className="text-2xl mb-2 transform group-hover/item:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-400 opacity-60"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-400 opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400 opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-400 opacity-60"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5
              }}
              className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full shadow-lg flex items-center justify-center text-white text-sm"
            >
              ⭐
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1
              }}
              className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-400 rounded-full shadow-lg"
            />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-200/30">
              <p className="text-gray-700 text-center text-lg">
                <span className="font-semibold text-blue-600">Electrical Engineering background</span> 
                {" "}provides a strong analytical foundation that enhances problem-solving skills in software development
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;