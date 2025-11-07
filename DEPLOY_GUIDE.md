# 🚀 Deployment Instructions

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Vite**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `dist`
3. **Add Environment Variable:**

   - Go to Project Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = `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`
   - Select all environments

4. **Redeploy** (if needed)

### Option 2: Deploy via CLI

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel
   ```

4. **Add Environment Variable:**

   ```bash
   vercel env add OPENAI_API_KEY
   ```

   Paste your API key when prompted

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## ✅ What's Configured

- ✅ Serverless API function at `/api/chat`
- ✅ Environment-aware API URL (dev: localhost, prod: /api/chat)
- ✅ OpenAI integration with secure API key
- ✅ CORS enabled for API requests
- ✅ Build optimized for Vite

## 📝 Important Notes

1. **API Key Security:** Never commit `.env` files to Git
2. **Environment Variable:** Must be set in Vercel dashboard
3. **API Endpoint:** Will be `https://your-site.vercel.app/api/chat`
4. **Local Testing:** Run backend server with `cd server && npm start`

## 🧪 Test After Deployment

1. Visit your deployed URL
2. Click the chat button (💬)
3. Ask: "Tell me about Shashank"
4. Should get AI-powered responses

## 🔧 Troubleshooting

**Chatbot not responding:**

- Check if `OPENAI_API_KEY` is set in Vercel
- Check browser console for errors
- Verify API function deployed at `/api/chat`

**Build fails:**

- Ensure `node_modules` is in `.gitignore`
- Check build logs in Vercel dashboard

Your portfolio with AI chatbot is ready to deploy! 🎉
