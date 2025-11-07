import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Shashank2877', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shashank-raviprakash-a2a66b260/', icon: '💼' },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-description">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <motion.a 
            href="mailto:shashank2877.raviprakash@gmail.com"
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello 👋
          </motion.a>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>Designed & Built by Shashank Raviprakash</p>
          <p className="footer-year">© 2025</p>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
