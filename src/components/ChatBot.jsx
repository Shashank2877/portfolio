import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ChatBot.css'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm here to answer questions about Shashank. What would you like to know?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleScroll = () => {
      // Consider "at top" if scrolled less than 100px from top
      setIsAtTop(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const regexResponses = [
    { pattern: /^(hello|hi|hey)$/i, reply: "Hey there! How can I help you today?" },
    { pattern: /^(help me|need help)$/i, reply: "Sure! Please tell me what you'd like help with." },
    { pattern: /^(what is your name|who are you|your name)$/i, reply: "I'm your AI assistant, powered by OpenAI." },
    { pattern: /^(thank you|thanks|thank)$/i, reply: "You're welcome! 😊" },
    { pattern: /^(bye|goodbye|see you)$/i, reply: "Goodbye! Have a great day!" },
  ]

  const checkRegexResponse = (message) => {
    for (const { pattern, reply } of regexResponses) {
      if (pattern.test(message)) {
        return reply
      }
    }
    return null
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    // Check for regex match first
    const regexReply = checkRegexResponse(userMessage)
    if (regexReply) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: regexReply }])
      }, 500)
      return
    }

    // Call OpenAI API for complex queries
    setIsLoading(true)
    try {
      // Use environment-specific API URL
      const apiUrl = import.meta.env.PROD 
        ? '/api/chat' 
        : 'http://localhost:3001/api/chat';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: userMessage }
          ]
        })
      })

      const data = await response.json()
      
      if (data.reply) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.reply 
        }])
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please try again.' 
        }])
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I couldn\'t process that. Please try again later.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && isAtTop && (
          <motion.div
            className="chat-prompt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Interact with our in-house AI to explore Shashank's journey, skills, and creations
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <h3>AI Assistant</h3>
              <p>Ask me anything!</p>
            </div>

            <div className="chat-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`message ${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.content}
                </motion.div>
              ))}
              {isLoading && (
                <div className="message assistant loading">
                  <span></span><span></span><span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button onClick={sendMessage} className="chat-send">
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
