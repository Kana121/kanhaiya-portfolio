import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "SQL"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Microservices", "Hibernate", "Kafka", "RESTful APIs"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Bootstrap"],
      icon: "🎨",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis"],
      icon: "🗄️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud",
      skills: ["AWS (EC2, S3, Lambda)", "Linux"],
      icon: "☁️",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Jenkins", "GitHub Actions"],
      icon: "🚀",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Maven", "JIRA", "MS Teams"],
      icon: "🛠️",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Concepts",
      skills: ["Data Structure", "Algorithm", "Software Development Life Cycle (SDLC)"],
      icon: "🧠",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse delay-500"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life and build amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setActiveCategory(index)}
              onHoverEnd={() => setActiveCategory(null)}
              className={`relative group cursor-pointer ${
                activeCategory === index ? 'z-10' : ''
              }`}
            >
              {/* Main Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      custom={skillIndex}
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        x: 10,
                        color: "#3b82f6",
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group/skill"
                    >
                      {/* Animated Bullet */}
                      <motion.span 
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0 group-hover/skill:scale-150 transition-transform duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      
                      {/* Skill Text */}
                      <span className="font-medium text-sm sm:text-base group-hover/skill:font-semibold transition-all duration-300">
                        {skill}
                      </span>

                      {/* Hover Arrow */}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-2 text-blue-500 opacity-0 group-hover/skill:opacity-100 transition-all duration-300"
                      >
                        →
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar Animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-4">
            Ready to leverage these skills for your project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Start a Project</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;