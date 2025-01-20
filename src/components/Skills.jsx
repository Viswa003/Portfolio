import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    "Languages": ["Python", "Java", "C", "JavaScript", "SQL"],
    "Frameworks and Libraries": ["React", "Node.js", "Express.js", "Bootstrap"],
    "Tools and Technologies": ["Git", "GitHub", "MongoDB", "VS Code", "Postman"],
    "Soft Skills": ["Strong problem-solving abilities", "Effective communication", "Team collaboration", "Adaptability"]
  };

  const certifications = [
    { name: "Certified Smart Coder by Smart Interviews", link: "https://smartinterviews.in/certificate/97c9cdee" },
    { name: "Learn How to Code: The Complete Core Java Programming Course", link: "https://apipro.e-box.co.in/course/previewCourseCompletionCertificate?code=70b2bf78-46fb-47d1-b3b3-0f714348a4f0" },
    { name: "Introduction to Web Development with HTML, CSS, JavaScript (IBM)", link: "https://coursera.org/share/a3c905cf56c99c563de5385571620997" },
    { name: "Bit and Build Hackathon conducted by GDSC CVR", link: "" }
  ];

  return (
    <section id="skills" className="section-padding bg-apple-gray">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-12 gradient-text">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold mb-8 text-highlight">Technical Skills</h3>
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-secondary">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/10 px-4 py-2 rounded-full text-lg font-medium"
                      style={{
                        color: `hsl(${(i * 40 + index * 60) % 360}, 80%, 75%)`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold mb-8 text-accent">Certifications</h3>
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 group"
                >
                  <span className="w-3 h-3 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-300 group-hover:text-white transition-colors"
                  >
                    {cert.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
