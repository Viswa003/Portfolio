import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0a192f] z-10"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center relative z-20"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-highlight">Hello, I'm</span>
          </h1>
          <div className="text-8xl font-bold gradient-text mb-6">
            <Typewriter
              options={{
                strings: ['Viswa Teja', 'a Developer', 'a Problem Solver'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A <span className="text-highlight">Computer Science</span> student passionate about 
          <span className="text-secondary"> full-stack development</span> and creating 
          <span className="text-accent"> impactful solutions</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover="hover"
            className="bg-primary-color text-[#0a192f] px-10 py-4 rounded-full text-xl font-semibold transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-secondary-color transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.a>
          <motion.a
            href="#projects"
            variants={buttonVariants}
            whileHover="hover"
            className="border-2 border-primary-color text-primary-color px-10 py-4 rounded-full text-xl font-semibold transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-primary-color transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
              View Projects
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;