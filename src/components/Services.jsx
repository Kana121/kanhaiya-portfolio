import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: '💼',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, React.js, and modern frameworks.',
      features: ['Microservices Architecture', 'RESTful APIs', 'Database Design', 'Frontend Development'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions & DevOps',
      description: 'AWS cloud deployment, CI/CD pipeline setup, and containerization for scalable applications.',
      features: ['AWS Services', 'Docker & Kubernetes', 'Jenkins CI/CD', 'System Architecture'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: '🔄',
      title: 'API Development & Integration',
      description: 'Design and integration of robust REST APIs with secure authentication and real-time features.',
      features: ['REST API Design', 'Kafka Integration', 'Third-party APIs', 'WebSocket Services'],
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      icon: '📱',
      title: 'React.js Frontend Development',
      description: 'Modern, responsive user interfaces with React.js, Tailwind CSS, and state management.',
      features: ['Component Library', 'State Management', 'Responsive Design', 'Performance Optimization'],
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      icon: '🏦',
      title: 'Banking & Finance Solutions',
      description: 'Secure, compliant financial applications with transaction processing and reporting.',
      features: ['Payment Systems', 'Security Compliance', 'Transaction Processing', 'Admin Dashboards'],
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500'
    },
    {
      icon: '🏥',
      title: 'Healthcare Applications',
      description: 'HIPAA-compliant healthcare platforms with telemedicine and patient management features.',
      features: ['Telemedicine Solutions', 'Appointment Systems', 'Patient Portals', 'Healthcare Compliance'],
      color: 'from-teal-500 to-cyan-500',
      gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500'
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
    hidden: { 
      opacity: 0, 
      y: 60,
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

  const featureVariants = {
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
      y: [0, -15, 0],
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

  return (
    <section id="services" className="relative section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-40 left-20 w-28 h-28 bg-cyan-200 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Freelance Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Offering comprehensive full-stack development services with expertise in banking, healthcare, 
            and enterprise applications. Let's build something amazing together!
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Main Service Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 200 }
                  }}
                  className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      custom={featureIndex}
                      variants={featureVariants}
                      whileHover={{ 
                        x: 8,
                        color: "#3b82f6",
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group/feature"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className={`w-2 h-2 rounded-full ${service.gradient} mr-3 flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300`}
                      />
                      <span className="text-sm sm:text-base font-medium group-hover/feature:font-semibold transition-all duration-300">
                        {feature}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-2 text-blue-500 opacity-0 group-hover/feature:opacity-100 transition-all duration-300"
                      >
                        →
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <span>Get Quote</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💬
                  </motion.span>
                </motion.button>

                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />

                {/* Shine Effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "200%", opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -z-5"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p 
            className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto relative z-10"
            whileHover={{ scale: 1.01 }}
          >
            Let's discuss your requirements and bring your ideas to life with cutting-edge technology solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "📞", text: "Call Now", href: "tel:+919182207980", color: "bg-white text-blue-600 hover:bg-gray-100" },
              { icon: "✉️", text: "Email Me", href: "mailto:kanhaiya.r.dharu@gmail.com", color: "border-2 border-white text-white hover:bg-white hover:text-blue-600" },
              { icon: "💬", text: "WhatsApp", href: "https://wa.me/919182207980", color: "bg-green-500 text-white hover:bg-green-600" }
            ].map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${action.color}`}
              >
                <span>{action.icon}</span>
                <span>{action.text}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Floating Elements in CTA */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;