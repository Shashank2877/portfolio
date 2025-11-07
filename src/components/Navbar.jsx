import { motion } from 'framer-motion'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
        >
          <span className="logo-text">SR</span>
        </motion.div>

        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={activeSection === item.id ? 'active' : ''}
              >
                <span className="nav-number">0{index + 1}.</span> {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button 
          className="theme-toggle"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'none' }}
        >
          ☀️
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
