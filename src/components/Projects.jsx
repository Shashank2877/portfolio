import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'NammaWeb - Full Stack Website',
      description: 'Architected and developed the complete website from ground up with full ownership of UI/UX design, front-end implementation, and back-end integration. Built for scalability and performance using modern tech stack.',
      tech: ['React', 'Express.js', 'MongoDB', 'AWS'],
      image: '🌐',
      link: 'https://www.nammaweb.com/',
      github: '#'
    },
    {
      title: 'ATS Resume Builder',
      description: 'TypeScript-based web application designed to create professional, ATS-friendly resumes. Features multi-format exports (PDF, Word, Text), real-time editing, and AI-assisted content optimization with clean architecture.',
      tech: ['TypeScript', 'CSS', 'HTML', 'AI Integration'],
      image: '📄',
      link: '#',
      github: 'https://github.com/Shashank2877/ATS-Resume_builder'
    },
    {
      title: 'AI Therapist Website - AURA 3.0',
      description: 'A responsive AI-powered mental wellness platform providing personalized therapy-like interactions. Features secure authentication, real-time chat, and emotion-aware AI responses using OpenAI API.',
      tech: ['JavaScript', 'Supabase', 'OpenAI API', 'Real-time Chat'],
      image: '🧠',
      link: '#',
      github: 'https://github.com/Shashank2877/Aura3.0'
    },
    {
      title: 'React-Firebase Chat Application',
      description: 'Real-time messaging platform using React and Firebase. Supports live updates, secure authentication, Firestore database, and media sharing. Scalable and interactive chat solution.',
      tech: ['React', 'Firebase', 'AWS', 'Real-time Database'],
      image: '💬',
      link: '#',
      github: 'https://github.com/Shashank2877/react_Firebase_chat'
    },
    {
      title: 'EXO-Finding: AI Exoplanet Detection',
      description: 'Machine learning project for detecting exoplanets through data analysis and predictive modeling. Combines astronomy with AI for practical exoplanet detection.',
      tech: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
      image: '🪐',
      link: '#',
      github: 'https://github.com/Shashank2877/Exo_Planets'
    },
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02.</span>
          <h2 className="section-title">Projects</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon">{project.image}</div>
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github !== '#' && (
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </motion.a>
                  )}
                  {project.link !== '#' && (
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-tech">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
