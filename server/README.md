# Portfolio Chatbot Backend

Secure backend API for the portfolio chatbot using Express and OpenAI.

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. The `.env` file is already configured with your API key

3. Start the server:

```bash
npm start
```

The server will run on `http://localhost:3001`

## Endpoints

- `POST /api/chat` - Send messages to the chatbot
- `GET /api/health` - Health check endpoint

## Security

✅ API key stored in environment variables
✅ Not exposed to frontend
✅ CORS enabled for your frontend
✅ .gitignore configured to protect .env

## Running Both Frontend and Backend

1. Terminal 1 (Backend):

```bash
cd server
npm start
```

2. Terminal 2 (Frontend):

```bash
npm run dev
```
