import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    'Python',
    'JavaScript',
    'C++',
    'React',
    'Node.js',
    'Express.js',
    'AWS',
    'Flask',
    'TensorFlow',
    'MongoDB',
    'MySQL',
    'Git',
    'Kubernetes',
    'Jenkins',
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm an aspiring software engineer passionate about building innovative and impactful 
              web solutions. Currently pursuing a B.E. in Information Science at Vidya Vardhaka 
              College of Engineering, I enjoy working at the intersection of technology, creativity, 
              and problem-solving.
            </p>
            <p>
              As an intern at <span className="highlight">NammaWeb LLP</span>, I've gained hands-on 
              experience in full-stack development, UI/UX design, and cloud technologies while 
              contributing to real-world projects. My interests span AI-driven applications, scalable 
              systems, and modern frameworks like React and Flask.
            </p>
            <p>
              I'm driven by curiosity, continuous learning, and a goal to create solutions that blend 
              functionality with great user experience — whether it's a smart web app, an AI tool, or 
              a system that makes everyday tasks simpler and smarter.
            </p>
          </motion.div>

          <motion.div 
            className="about-cta"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="cta-content"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h2 className="cta-title">
                LET'S WORK <br />
                <span className="cta-together">Together!</span>
              </h2>
              
              <div className="cta-info">
                <a href="mailto:shashank2877.raviprakash@gmail.com" className="cta-email">shashank2877.raviprakash@gmail.com</a>
                <p className="cta-phone">+91 6361188396</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
