import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="glass-effect p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:viswatejadundigala@gmail.com"
              className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-2xl" />
              <span>viswatejadundigala@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="tel:7981242951"
              className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="text-2xl" />
              <span>+91-7981242951</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/Viswa003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/viswa-teja-a1683424b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;