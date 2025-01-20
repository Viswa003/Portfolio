import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-12 gradient-text">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="glass-effect p-8 rounded-2xl md:col-span-2">
            <p className="text-xl mb-8 leading-relaxed text-gray-300">
              <span className="text-highlight text-2xl font-semibold block mb-4">Hello there! 👋</span>
                I am a passionate and driven Computer Science student with a strong foundation in full-stack development. With a keen interest in solving complex problems, I am constantly expanding my technical skills across various programming languages, frameworks, and tools. I thrive in collaborative environments and am eager to contribute innovative solutions to challenging real-world problems. My commitment to continuous learning and growth motivates me to seek out opportunities to apply my knowledge in dynamic, high-impact projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Location</h3>
                <p className="text-lg">Hyderabad, Telangana</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Contact</h3>
                <p className="text-lg mb-2">+91-7981242951</p>
                <p className="text-lg">viswatejadundigala@gmail.com</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-60 h-60 rounded-2xl overflow-hidden relative group mx-auto">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                alt="Coding Setup"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xl font-semibold text-highlight">Passionate about coding and technology</p>
              </div>
            </div>
            <div className="absolute -inset-4 border-2 border-primary-color rounded-2xl -z-10 transform rotate-3"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
