import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-[#0a192f] min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Quick Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-gray-400"
      >
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: '#64ffda' }}
          className="text-2xl text-gray-400 hover:text-primary-color transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: '#64ffda' }}
          className="text-2xl text-gray-400 hover:text-primary-color transition-colors"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      {/* Email Link */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-gray-400"
      >
        <motion.a
          href="mailto:viswatejadundigala@gmail.com"
          whileHover={{ y: -5 }}
          className="text-gray-400 hover:text-primary-color transition-colors vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          viswatejadundigala@gmail.com
        </motion.a>
      </motion.div>
    </div>
  );
}

export default App;