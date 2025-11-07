import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Technologies.css'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    { name: 'JavaScript', abbr: 'JS', color: '#f7df1e' },
    { name: 'TypeScript', abbr: 'TS', color: '#3178c6' },
    { name: 'React', abbr: '⚛', color: '#61dafb' },
    { name: 'Node.js', abbr: '●', color: '#339933' },
    { name: 'Python', abbr: 'PY', color: '#3776ab' },
    { name: 'Java', abbr: 'JV', color: '#007396' },
    { name: 'Kubernetes', abbr: 'K8s', color: '#326ce5' },
    { name: 'Docker', abbr: 'D', color: '#2496ed' },
    { name: 'AWS', abbr: 'AWS', color: '#ff9900' },
    { name: 'Agentic AI', abbr: 'AI', color: '#8b5cf6' },
    { name: 'MCP', abbr: 'MCP', color: '#10b981' },
    { name: 'Git', abbr: 'G', color: '#f05032' },
  ]

  return (
    <section id="technologies" className="technologies" ref={ref}>
      <div className="technologies-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03.</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="tech-abbr" style={{ color: tech.color }}>
                {tech.abbr}
              </div>
              <div className="tech-name">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
