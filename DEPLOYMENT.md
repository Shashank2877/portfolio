# Vercel Deployment Guide

## Prerequisites

1. Install Vercel CLI: `npm install -g vercel`
2. Have a Vercel account (free)

## Deployment Steps

### 1. Update Frontend API URL

The ChatBot component will automatically use the production API when deployed.

### 2. Set Environment Variables in Vercel

Go to your Vercel project settings and add:

- `OPENAI_API_KEY` = your API key

### 3. Deploy

```bash
vercel
```

Follow the prompts:

- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **portfolio** (or your choice)
- Directory? **./** (press Enter)
- Override settings? **N**

### 4. Production Deployment

```bash
vercel --prod
```

## Environment Variables on Vercel Dashboard

1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add: `OPENAI_API_KEY` with your API key
4. Select all environments (Production, Preview, Development)
5. Save

## API Endpoint

Your chatbot API will be available at:
`https://your-project.vercel.app/api/chat`

## Important Files

- `/api/chat.js` - Serverless function for chatbot
- `vercel.json` - Vercel configuration
- `.gitignore` - Excludes sensitive files

## Testing After Deployment

1. Visit your deployed site
2. Click the chat button
3. Test with questions about Shashank

Your portfolio is now live! 🚀
