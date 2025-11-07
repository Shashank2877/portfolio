import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are a helpful and focused AI assistant for Shashank Raviprakash's portfolio website. 

Respond only to the user's question — no extra details or assumptions.
If the question is unclear, politely ask for clarification.
Use concise, professional, and natural language in your responses.
Do not answer personal, unrelated, or vague queries.
Keep responses short, accurate, and relevant to the question.

Context about Shashank:
- AI enthusiast and web developer
- Student at VVCE (Vidya Vardhaka College of Engineering), B.E. Information Science, CGPA 8.79
- Intern at NammaWeb LLP
- Skills: Python, JavaScript, TypeScript, React, Node.js, PostgreSQL, Docker, Kubernetes, AWS, Agentic AI, MCP, Git
- Projects: 
  * NammaWeb website (https://www.nammaweb.com/)
  * AURA 3.0 - AI therapist chatbot
  * ATS Resume Builder - AI-powered resume analyzer
  * Chat App - Real-time messaging application
  * Exo-Finding - Exoplanet detection using ML
- Email: shashank2877.raviprakash@gmail.com
- Phone: +91 6361188396
- GitHub: Shashank2877`;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    const reply = completion.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      error: 'Failed to process your request. Please try again later.' 
    });
  }
}
