import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      school: "CVR College of Engineering",
      degree: "Bachelor of Technology",
      period: "2021– Present",
      location: "Hyderabad, Telangana",
      grade: "CGPA: 8.99"
    },
    {
      school: "Sri Chaitanya Junior College",
      degree: "Intermediate- MPC",
      period: "2019– 2021",
      location: "Hyderabad, Telangana",
      grade: "Percentage: 96.6%"
    }
  ];

  return (
    <section id="education" className="section-padding bg-apple-gray">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
              <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
              <p className="mt-2 text-white">{edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;