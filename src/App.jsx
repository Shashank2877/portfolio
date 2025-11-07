import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'
import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <ChatBot />
    </div>
  )
}

export default App
