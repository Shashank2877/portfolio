import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="hero-greeting"
          variants={itemVariants}
        >
          Hey, name is 
        </motion.p>

        <motion.h1 
          className="hero-name"
          variants={itemVariants}
        >
          SHASHANK RAVIPRAKASH
        </motion.h1>

        <motion.h2 
          className="hero-title"
          variants={itemVariants}
        >
          <span className="handwriting">an AI Enthusiast & I build websites</span>
        </motion.h2>

        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          I'm a Computer Science student at VVCE and currently interning at <span className="highlight">NammaWeb LLP</span>. 
          I specialize in building intelligent web applications that combine AI capabilities 
          with modern web technologies to create innovative digital solutions.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            Check out my work!
          </motion.button>
          <motion.a 
            href="/Shashank's Resume.pdf"
            download
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📥</span> Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className="good-vibes-badge"
          variants={itemVariants}
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ display: 'none' }}
        >
          <span>Good Vibes</span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="image-wrapper">
          <div className="image-container">
            <img src="/2nd_pic.jpg" alt="Shashank Raviprakash" className="profile-image" />
          </div>
          <div className="hero-image-border"></div>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
