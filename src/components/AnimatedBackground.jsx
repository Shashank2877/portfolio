import { motion } from 'framer-motion'
import './AnimatedBackground.css'

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Floating Mandala Patterns */}
      <motion.div
        className="mandala mandala-1"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="mandala mandala-2"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 70 * Math.cos((i * 45 * Math.PI) / 180)}
              y2={100 + 70 * Math.sin((i * 45 * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="mandala mandala-3"
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
          <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 65 * Math.cos((i * 22.5 * Math.PI) / 180)}
              y2={100 + 65 * Math.sin((i * 22.5 * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.25"
            />
          ))}
        </svg>
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default AnimatedBackground
