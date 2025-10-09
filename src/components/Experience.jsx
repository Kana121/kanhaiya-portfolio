import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      company: "Helson Software Solutions Pvt. Ltd",
      position: "Software Engineer",
      duration: "JUNE 2022 - JULY 2025, Hyderabad",
      icon: "💼",
      color: "from-blue-500 to-cyan-500",
      description: "Results-driven Java Full Stack Developer with experience designing, developing, and deploying scalable, high-performance applications in banking, healthcare, and e-commerce domains. Proficient in backend technologies including Java, Spring Boot, Microservices, and Kafka, with strong skills in frontend frameworks like React.js. Experienced in AWS cloud services, CI/CD pipelines, Docker. Adept at solving complex problems using clean architecture and agile methodologies. Strong collaborator with experience mentoring interns and driving quality in cross-functional teams.",
      projects: [
        {
          name: "Merchant Acquisition – Agency Banking (Banking Domain)",
          icon: "🏦",
          color: "from-green-500 to-emerald-500",
          points: [
            "Designed and implemented microservices architecture for a merchant onboarding and transaction system.",
            "Developed REST APIs using Spring Boot and integrated Kafka for real-time asynchronous communication.",
            "Built CI/CD pipelines with Jenkins, Docker, and Kubernetes, reducing manual deployment efforts by 30%.",
            "Integrated Apache Kafka for real-time, asynchronous communication between distributed services.",
            "Incorporated React.js components with redux toolkit for internal admin dashboards and system status interfaces enabling efficient state management and seamless user experience.",
            "Leveraged AWS services (EC2, S3, Lambda) to improve system availability and scalability.",
            "Conducted code reviews and mentored junior developers to improve code quality and team productivity."
          ]
        },
        {
          name: "HealthConnect Platform (MClient) (Healthcare Domain)",
          icon: "🏥",
          color: "from-purple-500 to-pink-500",
          points: [
            "Developed a full-stack healthcare platform supporting telemedicine, appointment scheduling, and digital health services.",
            "Built a full-stack telemedicine and healthcare services platform supporting patient appointments, video consultations, and digital prescriptions.",
            "Implemented backend services using Spring Boot and Hibernate, with Kafka-based messaging for notification and logging modules.",
            "Developed responsive and dynamic frontend dashboards using React.js and Bootstrap, enabling real-time data interaction for clinicians and patients.",
            "Adopted a microservices architecture to modularize core services like appointments, user management, payments, and analytics.",
            "Optimized database interactions MySQL, enhancing system reliability and reducing query latency.",
            "Collaborated with healthcare professionals to tailor features to clinical workflows and compliance needs."
          ]
        },
        {
          name: "ShopNest E-commerce Platform (E-commerce Domain)",
          icon: "🛒",
          color: "from-orange-500 to-red-500",
          points: [
            "Developed a full-stack e-commerce platform with React.js frontend and Spring Boot microservices backend.",
            "Implemented product catalog management with advanced search, filtering, and categorization features.",
            "Built secure payment gateway integration supporting multiple payment methods (Razorpay, Stripe, PayPal).",
            "Designed and implemented shopping cart functionality with real-time inventory management.",
            "Developed user authentication and authorization system with JWT tokens and role-based access control.",
            "Created admin dashboard for order management, product CRUD operations, and sales analytics.",
            "Optimized application performance with Redis caching, CDN integration, and database query optimization.",
            "Implemented responsive design ensuring seamless shopping experience across all devices.",
            "Integrated real-time notifications for order updates, promotions, and inventory alerts.",
            "Deployed using Docker containers on AWS with auto-scaling and load balancing capabilities."
          ]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const pointVariants = {
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

  // E-commerce specific technologies
  const ecommerceTech = [
    { name: "React.js", icon: "⚛️" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🗃️" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Razorpay", icon: "💳" },
    { name: "JWT", icon: "🔐" }
  ];

  return (
    <section id="experience" className="relative section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable solutions and driving innovation across banking, healthcare, and e-commerce domains
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 sm:mb-16"
            >
              {/* Main Experience Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
                
                <div className="relative p-8 sm:p-10 lg:p-12">
                  {/* Company Header */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl shadow-lg`}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{exp.company}</h3>
                          <p className="text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mt-1">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
                    >
                      {exp.duration}
                    </motion.div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-700 mb-10 leading-relaxed bg-gradient-to-r from-gray-50 to-blue-50/50 p-6 rounded-2xl border border-gray-100"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Domain Expertise Badges */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-3 mb-8 justify-center"
                  >
                    {[
                      { domain: "Banking", icon: "🏦", color: "bg-green-100 text-green-800" },
                      { domain: "Healthcare", icon: "🏥", color: "bg-purple-100 text-purple-800" },
                      { domain: "E-commerce", icon: "🛒", color: "bg-orange-100 text-orange-800" }
                    ].map((badge, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${badge.color} shadow-sm`}
                      >
                        <span>{badge.icon}</span>
                        <span>{badge.domain}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Projects */}
                  <motion.div
                    variants={containerVariants}
                    className="space-y-8"
                  >
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-8 border border-gray-200/50 shadow-lg group/project"
                      >
                        {/* Project Header */}
                        <motion.div
                          variants={itemVariants}
                          className="flex items-center gap-4 mb-6"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-xl shadow-md`}
                          >
                            {project.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                              {project.name}
                            </h4>
                            {project.name.includes("E-commerce") && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-2 mt-3"
                              >
                                {ecommerceTech.map((tech, techIndex) => (
                                  <motion.span
                                    key={techIndex}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium"
                                  >
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                  </motion.span>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        </motion.div>

                        {/* Project Points */}
                        <motion.ul
                          variants={containerVariants}
                          className="space-y-4"
                        >
                          {project.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              custom={pointIndex}
                              variants={pointVariants}
                              whileHover={{ 
                                x: 10,
                                color: "#3b82f6",
                                transition: { type: "spring", stiffness: 400 }
                              }}
                              className="flex items-start text-gray-700 hover:text-blue-600 transition-colors duration-300 group/point"
                            >
                              {/* Animated Bullet */}
                              <motion.div
                                whileHover={{ scale: 1.5 }}
                                className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-4 mt-2 flex-shrink-0 group-hover/point:scale-150 transition-transform duration-300`}
                              />
                              
                              {/* Point Text */}
                              <span className="text-base leading-relaxed group-hover/point:font-medium transition-all duration-300">
                                {point}
                              </span>

                              {/* Hover Arrow */}
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="ml-2 text-blue-500 opacity-0 group-hover/point:opacity-100 transition-all duration-300 flex-shrink-0"
                              >
                                →
                              </motion.span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        {/* E-commerce Demo Link */}
                        {project.name.includes("E-commerce") && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 pt-6 border-t border-gray-200"
                          >
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                              <p className="text-gray-600 text-sm">
                                🚀 Full-stack e-commerce solution with modern tech stack
                              </p>
                            
                            </div>
                          </motion.div>
                        )}

                        {/* Project Gradient Border */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover/project:opacity-5 transition-opacity duration-500 -z-10`} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400 rounded-full shadow-lg"
                />
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                  className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-400 rounded-full shadow-lg"
                />
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 -left-3 w-5 h-5 bg-orange-400 rounded-full shadow-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-6">
            Interested in building your next e-commerce platform or enterprise application?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💬
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;