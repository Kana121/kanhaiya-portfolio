import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Awards = () => {
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

  const trophyVariants = {
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
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const shineVariants = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: "200%",
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, (i % 2 === 0 ? 1 : -1) * 50],
      y: [0, (i % 3 === 0 ? 1 : -1) * 50],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative section-padding bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 4) * 15}%`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-30"
        />
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
            variants={cardVariants}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Awards & Achievements
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Celebrating milestones of excellence in both professional and personal endeavors
            </p>
          </motion.div>

          {/* Main Award Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="relative max-w-2xl mx-auto group"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
              {/* Shine Effect */}
              <motion.div
                variants={shineVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -z-5"
              />
              
              {/* Trophy Icon */}
              <motion.div
                variants={trophyVariants}
                className="relative mb-8"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="text-6xl sm:text-8xl mb-4"
                >
                  🏆
                </motion.div>
                
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 -z-10"
                />
              </motion.div>

              {/* Award Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  2nd Position
                </h3>
                
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Zonal Weightlifting Championship
                  </p>
                  <p className="text-lg text-gray-600 font-medium">
                    Demonstrating Strength & Discipline
                  </p>
                </div>

                <motion.p 
                  className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  A testament to dedication and perseverance, showcasing excellence beyond professional boundaries through physical achievement and mental fortitude.
                </motion.p>

                {/* Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  {[
                    { icon: "💪", text: "Strength" },
                    { icon: "🎯", text: "Discipline" },
                    { icon: "⭐", text: "Excellence" },
                    { icon: "🚀", text: "Achievement" }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    >
                      <span>{badge.icon}</span>
                      <span>{badge.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-60"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-400 opacity-60"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2
              }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full shadow-lg"
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.6 }}
            className="mt-12"
          >
            <p className="text-blue-200 text-lg mb-6">
              Ready to achieve great things together?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span>Let's Create Success</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎯
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;