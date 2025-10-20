import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Services", href: "#services", icon: "💼" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Projects", href: "#experience", icon: "🚀" },
    { name: "Contact", href: "#contact", icon: "📞" }
  ];

  const contactItems = [
    { type: "phone", value: "+91 9182207980", href: "tel:+919182207980", icon: "📞" },
    { type: "email", value: "kanhaiya.r.dharu@gmail.com", href: "mailto:kanhaiya.r.dharu@gmail.com", icon: "📧" }
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
    hidden: { opacity: 0, y: -20 },
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

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      color: "#3b82f6",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h 
              className=" text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/logo.png" width={50} alt="KRD SOLUTION" />
            </motion.h>
            <motion.p 
              className="text-xs sm:text-sm text-gray-600 hidden xs:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Java Full-stack Developer & Freelancer
            </motion.p>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={navItemVariants}
                whileHover="hover"
                className="relative text-gray-700 hover:text-blue-600 font-medium text-sm group flex items-center gap-2 py-2"
              >
                <span className="text-sm">{item.icon}</span>
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Contact Info - Desktop */}
          <motion.div 
            className="hidden md:flex items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex flex-col items-end"
              variants={itemVariants}
            >
              <p className="text-gray-700 text-sm flex items-center gap-1">
                <span>📍</span> SR Nagar, Hyderabad
              </p>
              <div className="flex gap-4 mt-1">
                {contactItems.map((contact) => (
                  <motion.a
                    key={contact.type}
                    href={contact.href}
                    whileHover={{ scale: 1.05, color: "#3b82f6" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full transition-all duration-300"
                  >
                    <span>{contact.icon}</span>
                    <span className="hidden sm:inline">
                      {contact.type === 'phone' ? '9182207980' : 'Email'}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 180 }
              }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="py-6 border-t border-gray-200"
              >
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4 mb-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={navItemVariants}
                      whileHover={{ x: 10, color: "#3b82f6" }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 text-lg"
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-blue-500 ml-auto"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </nav>
                
                {/* Mobile Contact Info */}
                <motion.div
                  variants={itemVariants}
                  className="pt-6 border-t border-gray-200"
                >
                  <p className="text-gray-700 text-sm mb-4 flex items-center gap-2">
                    <span>📍</span> SR Nagar, Hyderabad
                  </p>
                  <div className="flex flex-col space-y-3">
                    {contactItems.map((contact, index) => (
                      <motion.a
                        key={contact.type}
                        href={contact.href}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, x: 5 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-blue-600 hover:text-blue-800 text-base flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl transition-all duration-300"
                      >
                        <span className="text-lg">{contact.icon}</span>
                        <span>{contact.value}</span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile CTA Button */}
                  <motion.a
                    href="#contact"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Start a Project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      🚀
                    </motion.span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.header>
  );
};

export default Header;