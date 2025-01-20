import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

function Projects() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "Collaborative Code Editor",
      technologies: "HTML, CSS, JavaScript, MERN Stack, Ace Editor Library, Socket.io",
      description: [
        "Developed a collaborative code editor using the MERN stack, incorporating the Ace Editor Library for collaborative code editing.",
        "Integrated Socket.io to enable real-time communication among users, allowing simultaneous code editing and live chat functionality.",
        "Implemented room creation and joining functionalities to organize collaborative sessions.",
        "Added user authentication using cookies to manage and secure user sessions."
      ]
    },
    {
      title: "Anonymous Chat Application",
      technologies: "Node.js, Express.js, Socket.io",
      description: [
        "Developed a real-time anonymous chat web application that connects two random users.",
        "Implemented dynamic pairing for random user connections and engineered user interaction events.",
        "Tracked online user count to provide insights into platform activity.",
        "Ensured robust error handling mechanisms."
      ]
    },
    {
      title: "DermaAI",
      technologies: "Python, Flask, TensorFlow, Keras",
      description: [
        "Developed a web-based application for early skin cancer detection using deep learning.",
        "Used CNNs to classify skin lesions from the HAM10000 dataset.",
        "Applied image segmentation and transfer learning with MobileNetV2 for improved accuracy.",
        "Delivered a high-precision diagnostic tool for early skin cancer detection."
      ]
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="projects" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-12 gradient-text">Projects</h2>
        
        <div className="relative">
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto scrollbar-hide gap-8 cursor-grab active:cursor-grabbing pb-8"
            style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-8 rounded-2xl min-w-[400px] max-w-[400px] scroll-snap-align-start"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-highlight">{project.title}</h3>
                <p className="text-lg text-secondary mb-6">{project.technologies}</p>
                <ul className="space-y-3">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start space-x-2">
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute left-0 bottom-0 w-full flex justify-center space-x-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const cardWidth = 400 + 32; // card width + gap
                  sliderRef.current.scrollLeft = index * cardWidth;
                }}
                className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;