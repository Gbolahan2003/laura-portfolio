import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Iconify from './icon';
import profile1 from './assets/images/WhatsApp Image 2025-01-15 at 15.10.17_364c1a94.jpg';
import profile2 from './assets/images/WhatsApp Image 2025-01-15 at 15.10.17_f0b0e1ad.jpg';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id: string | null) => {
    const element = id ? document.getElementById(id) : null;
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
    setIsNavOpen(false); // Close dropdown on click
  };
  
  return (
    <div className={'dark'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 dark:bg-gray-900 dark:text-white">
        {/* Navbar */}
        <motion.nav
          className="flex justify-between py-6 items-center sticky top-0 bg-white dark:bg-gray-900 z-50 shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-3xl font-bold text-blue-500 hover:text-blue-600 transition-all">Laura</div>
          <div className="hidden lg:flex gap-8 font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition-all">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-500 transition-all">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition-all">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-all">Contact</button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-2xl">
              {isNavOpen ? '✕' : '☰'}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        {isNavOpen && (
          <motion.div
            className="lg:hidden flex flex-col bg-white p-4 gap-4 shadow-md rounded-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => scrollToSection('about')} className="text-gray-800 dark:text-white">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-800 dark:text-white">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-800 dark:text-white">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 dark:text-white">Contact</button>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center text-center py-16 min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${profile1})` }}
          id="hero"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hello, I'm Laura</h1>
          <h2 className="text-2xl text-gray-500 mt-2 dark:text-gray-300">Backend Developer</h2>
          <p className="text-gray-600 mt-4 max-w-2xl dark:text-gray-300">
            Passionate about building scalable backend systems and delivering robust solutions.
          </p>
        </motion.section>

        <motion.section
          id="button"
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Download CV
            </motion.button>
            <motion.button
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              GitHub
            </motion.button>
          </div>
        </motion.section>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-300 mt-8">
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <Iconify icon="mdi:linkedin" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <Iconify icon="mdi:github" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <Iconify icon="mdi:twitter" />
          </motion.div>
        </div>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center">
            <motion.img
              src={profile2}
              alt="About"
              className="rounded-lg h-[25rem] w-[20rem] shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="max-w-xl">
              <p>
                I am a skilled backend developer with 2+ years of experience in building efficient and scalable backend
                systems. Let’s build something amazing together!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-16 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 w-80 dark:bg-gray-700 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">2+ Years</h3>
              <p className="text-gray-600 mt-2">Backend Development</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 w-80 hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold">Portfolio Website</h3>
              <p>Showcasing a modern developer portfolio.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-16 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">Contact</h2>
          <form className="mt-12 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 dark:text-white text-center">
              Get in Touch
            </h2>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={5}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
