import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      name: "Real-Time Financial Analytics Dashboard",
      domain: "Banking & Finance",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
      status: "🚀 Live Project",
      duration: "3 months",
      description: "A real-time financial dashboard with AI-powered trend predictions, portfolio management, and live market data streaming. Built with microservices architecture handling 10,000+ concurrent users.",
      technologies: [
        { name: "Spring Boot", icon: "🌱", category: "Backend" },
        { name: "React.js", icon: "⚛️", category: "Frontend" },
        { name: "Kafka", icon: "🔁", category: "Messaging" },
        { name: "Redis", icon: "🗃️", category: "Cache" },
        { name: "WebSocket", icon: "🔌", category: "Real-time" },
        { name: "D3.js", icon: "📈", category: "Visualization" },
        { name: "Docker", icon: "🐳", category: "DevOps" },
        { name: "AWS EC2", icon: "☁️", category: "Cloud" }
      ],
      myContributions: [
        "Architected and developed the complete microservices ecosystem with 8 independent services",
        "Implemented real-time data streaming using Kafka, reducing data latency from 5 minutes to 2 seconds",
        "Built predictive analytics module using ML integration for stock trend predictions",
        "Developed responsive React dashboard with real-time charts using D3.js and WebSocket",
        "Designed and implemented caching strategy with Redis, improving API response time by 65%",
        "Created CI/CD pipeline with Docker and Jenkins, reducing deployment time by 40%"
      ],
      keyAchievements: [
        "Handles 10,000+ concurrent users with 99.9% uptime",
        "Reduced data processing latency by 98%",
        "Improved user engagement by 45% with real-time features",
        "Decreased server costs by 30% with optimized caching"
      ],
      challenges: [
        "Scalability: Initially struggled with handling high-frequency data - solved with Kafka partitioning",
        "Real-time synchronization: Implemented WebSocket fallback mechanisms",
        "Data consistency: Used eventual consistency patterns across microservices"
      ],
      learnings: [
        "Mastered event-driven architecture and real-time data processing",
        "Learned advanced Kafka configurations and stream processing",
        "Gained expertise in financial domain and regulatory requirements",
        "Improved skills in performance optimization and monitoring"
      ]
    },
    {
      name: "AI-Powered Healthcare Diagnosis Assistant",
      domain: "Healthcare",
      icon: "🏥",
      color: "from-purple-500 to-pink-500",
      status: "💡 In Development",
      duration: "4 months",
      description: "An intelligent healthcare platform combining telemedicine with AI-powered symptom analysis, doctor-patient matching, and digital prescription management. Compliant with healthcare regulations.",
      technologies: [
        { name: "Spring Boot", icon: "🌱", category: "Backend" },
        { name: "React.js", icon: "⚛️", category: "Frontend" },
        { name: "Python FastAPI", icon: "🐍", category: "AI/ML" },
        { name: "WebRTC", icon: "🎥", category: "Video Call" },
        { name: "PostgreSQL", icon: "🐘", category: "Database" },
        { name: "JWT", icon: "🔐", category: "Security" },
        { name: "Docker", icon: "🐳", category: "DevOps" },
        { name: "Azure", icon: "☁️", category: "Cloud" }
      ],
      myContributions: [
        "Developed the complete telemedicine infrastructure with WebRTC video calling",
        "Built AI symptom checker integrating Python ML models with Java backend",
        "Implemented secure patient data management compliant with healthcare regulations",
        "Created doctor-patient matching algorithm based on specialization and availability",
        "Developed real-time appointment scheduling with conflict resolution",
        "Built prescription management system with digital signatures and audit trails"
      ],
      keyAchievements: [
        "Reduced diagnosis time by 60% with AI assistance",
        "Achieved 99.5% accuracy in symptom matching",
        "Handled 5,000+ monthly teleconsultations",
        "Improved patient satisfaction scores by 40%"
      ],
      challenges: [
        "HIPAA Compliance: Implemented end-to-end encryption and secure data storage",
        "AI Integration: Solved latency issues with async processing and caching",
        "Video Quality: Optimized WebRTC for low-bandwidth environments"
      ],
      learnings: [
        "Deep understanding of healthcare compliance and data security",
        "Mastered cross-language integration (Java + Python)",
        "Learned real-time communication protocols and optimization",
        "Gained experience in AI/ML model deployment and scaling"
      ]
    },
    {
      name: "Smart E-Commerce Personalization Engine",
      domain: "E-Commerce",
      icon: "🛒",
      color: "from-orange-500 to-red-500",
      status: "🎯 Completed",
      duration: "5 months",
      description: "A full-stack e-commerce platform with AI-driven personalization, real-time inventory management, and advanced recommendation engine. Features dynamic pricing and social commerce integration.",
      technologies: [
        { name: "Spring Boot", icon: "🌱", category: "Backend" },
        { name: "React.js", icon: "⚛️", category: "Frontend" },
        { name: "Redis", icon: "🗃️", category: "Cache" },
        { name: "Elasticsearch", icon: "🔍", category: "Search" },
        { name: "RabbitMQ", icon: "🐇", category: "Messaging" },
        { name: "Stripe/Razorpay", icon: "💳", category: "Payment" },
        { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
        { name: "AWS", icon: "☁️", category: "Cloud" }
      ],
      myContributions: [
        "Architected and developed the complete microservices-based e-commerce platform",
        "Built AI recommendation engine using collaborative filtering and content-based filtering",
        "Implemented real-time inventory management with Redis and message queues",
        "Developed dynamic pricing algorithm based on demand, competition, and user behavior",
        "Created advanced search functionality with Elasticsearch and faceted filtering",
        "Integrated multiple payment gateways with secure transaction handling",
        "Built admin dashboard for analytics, inventory management, and order processing"
      ],
      keyAchievements: [
        "Increased conversion rate by 35% with personalized recommendations",
        "Reduced cart abandonment by 25% with real-time inventory updates",
        "Improved search relevance by 60% with Elasticsearch implementation",
        "Handled Black Friday traffic spike of 50,000+ users without downtime"
      ],
      challenges: [
        "Inventory Synchronization: Implemented distributed locking and eventual consistency",
        "Recommendation Accuracy: Fine-tuned ML models with A/B testing",
        "Payment Security: Achieved PCI DSS compliance with secure tokenization"
      ],
      learnings: [
        "Mastered e-commerce architecture patterns and scalability challenges",
        "Learned advanced Redis patterns for caching and real-time features",
        "Gained expertise in payment gateway integrations and security",
        "Improved skills in performance monitoring and optimization"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
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
        stiffness: 100,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
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
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="relative section-padding bg-gradient-to-br from-gray-50 via-orange-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-orange-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-pink-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1
          }}
          className="absolute top-3/4 left-1/2 w-32 h-32 bg-green-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions across domains with cutting-edge technologies and measurable impact
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="relative"
            >
              {/* Main Project Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,107,0.05)_50%,transparent_75%,transparent_100%)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
                
                <div className="relative p-8 sm:p-10 lg:p-12">
                  {/* Project Header */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-3xl shadow-xl`}
                        >
                          {project.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 flex-wrap">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                              {project.name}
                            </h3>
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                project.status.includes('Live') 
                                  ? 'bg-green-100 text-green-800' 
                                  : project.status.includes('Development')
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-purple-100 text-purple-800'
                              }`}
                            >
                              {project.status}
                            </motion.span>
                          </div>
                          <p className="text-xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent font-semibold mt-2">
                            {project.domain} • {project.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-700 mb-8 leading-relaxed bg-gradient-to-r from-gray-50 to-orange-50/50 p-6 rounded-2xl border border-gray-100"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies Stack */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span>🛠️</span> Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm group/tech"
                        >
                          <span className="text-lg">{tech.icon}</span>
                          <span className="font-medium text-gray-700">{tech.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {tech.category}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Contributions & Impact */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* My Contributions */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>💪</span> My Key Contributions
                      </h4>
                      <motion.ul className="space-y-3">
                        {project.myContributions.map((contribution, idx) => (
                          <motion.li
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            whileHover={{ x: 5, color: "#3b82f6" }}
                            className="flex items-start text-gray-700 hover:text-blue-600 transition-colors duration-300 group/contribution"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3 }}
                              className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"
                            />
                            <span className="text-base leading-relaxed">
                              {contribution}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    {/* Key Achievements */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>📈</span> Key Achievements
                      </h4>
                      <motion.ul className="space-y-3">
                        {project.keyAchievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            whileHover={{ x: 5, color: "#10b981" }}
                            className="flex items-start text-gray-700 hover:text-green-600 transition-colors duration-300 group/achievement"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3 }}
                              className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"
                            />
                            <span className="text-base leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Challenges Solved */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>⚡</span> Challenges & Solutions
                      </h4>
                      <motion.ul className="space-y-3">
                        {project.challenges.map((challenge, idx) => (
                          <motion.li
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            whileHover={{ x: 5, color: "#8b5cf6" }}
                            className="flex items-start text-gray-700 hover:text-purple-600 transition-colors duration-300 group/challenge"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3 }}
                              className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"
                            />
                            <span className="text-base leading-relaxed">
                              {challenge}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    {/* Key Learnings */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100"
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>🎯</span> Key Learnings
                      </h4>
                      <motion.ul className="space-y-3">
                        {project.learnings.map((learning, idx) => (
                          <motion.li
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            whileHover={{ x: 5, color: "#f97316" }}
                            className="flex items-start text-gray-700 hover:text-orange-600 transition-colors duration-300 group/learning"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3 }}
                              className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"
                            />
                            <span className="text-base leading-relaxed">
                              {learning}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full shadow-lg"
                />
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg"
                />
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1.4 }}
                  className="absolute top-1/2 -right-6 w-5 h-5 bg-green-400 rounded-full shadow-lg"
                />

                {/* Project Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Let's Build Together</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;