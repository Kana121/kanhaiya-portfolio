import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const subject = `Freelance Project Inquiry: ${formData.projectType}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim();

    window.location.href = `mailto:kanhaiya.r.dharu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "kanhaiya.r.dharu@gmail.com",
      link: "mailto:kanhaiya.r.dharu@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 9182207980",
      link: "tel:+919182207980",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+91 9182207980",
      link: "https://wa.me/919182207980",
      color: "from-green-400 to-green-600"
    },
    {
      icon: "📍",
      title: "Location",
      value: "SR Nagar, Hyderabad, India",
      link: null,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                
                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.link}
                      target={method.link?.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 ${
                        method.link ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">{method.title}</h4>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                      
                      {/* Hover Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    </motion.a>
                  ))}
                </div>

                {/* Why Work With Me */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🚀</span> Why Choose Me?
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "3.1+ Years Full-stack Experience",
                      "Banking & Healthcare Domain Expert",
                      "End-to-End Project Delivery",
                      "Agile Methodology & Quick Turnaround",
                      "Post-deployment Support & Maintenance",
                      "Clean Code & Best Practices"
                    ].map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="flex items-center text-blue-100"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Start Your Project
                </h3>
                <p className="text-gray-600">
                  Fill out the form and I'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                    placeholder="+91 1234567890"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                  >
                    <option value="">What type of project?</option>
                    <option value="web-application">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="api-development">API Development</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-20k">₹5,000 - ₹20,000</option>
                      <option value="20k-50k">₹20,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L+">₹1,00,000+</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50"
                    >
                      <option value="">Expected timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="2+ months">2+ months</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 resize-none"
                    placeholder="Tell me about your project requirements, goals, and any specific features you have in mind..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="flex items-center justify-center gap-3"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </motion.div>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Send Project Inquiry
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;