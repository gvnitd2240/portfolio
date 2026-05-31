import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaCalendar, FaUser, FaBars, FaTimes, FaPen, FaBook, FaRss, FaGithub, FaLinkedin, FaCode, FaDatabase, FaTools, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
            Vivek Garg
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden xl:flex space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
            <Link href="/#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button - Always visible on mobile/tablet */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-6 py-4 space-y-0">
              <Link 
                href="/#about" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                About
              </Link>
              <Link 
                href="/#experience" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Experience
              </Link>
              <Link 
                href="/#skills" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Skills
              </Link>
              <Link 
                href="/blog" 
                onClick={closeMobileMenu}
                className="block text-blue-600 font-semibold py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Blog
              </Link>
              <Link 
                href="/#contact" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 hover:bg-gray-50 rounded-lg px-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function BlogHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blogs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights about software engineering, technology trends, and my journey in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Illustration */}
        <div className="mb-12">
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <div className="text-center">
              <FaPen className="text-6xl text-blue-600 mx-auto mb-4" />
              <div className="flex justify-center space-x-2">
                <FaBook className="text-2xl text-purple-500" />
                <FaRss className="text-2xl text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm currently working on some exciting blog posts about software engineering, 
            microservices architecture, and my experiences in the tech industry. 
            Stay tuned for insightful content coming your way!
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaCode className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Insights</h4>
                  <p className="text-gray-600 text-sm">Deep dives into software engineering concepts and best practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaDatabase className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Architecture</h4>
                  <p className="text-gray-600 text-sm">Microservices, API design, and scalable system patterns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaTools className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tools & Tips</h4>
                  <p className="text-gray-600 text-sm">Practical tips and tool recommendations for developers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaEnvelope />
              <span>Get in Touch</span>
            </Link>
            <a
              href="https://github.com/gvnitd2240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaGithub />
              <span>Follow on GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaLinkedin />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BlogHero />
      <EmptyState />
    </div>
  );
}

export default BlogPage; 