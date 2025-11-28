# Deployment Guide for DeveloperFolio

This guide covers multiple deployment options for your portfolio website.

## Option 1: GitHub Pages (Already Configured) ⭐ Easiest

Your project is already set up for GitHub Pages deployment!

### Steps:
1. Make sure all your changes are committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Your site will be live at: `https://praveenarjun.github.io/Portfolio-Website/`

**Note:** Update the `homepage` field in `package.json` if you want a different URL.

---

## Option 2: Netlify (Recommended) ⭐⭐⭐

Netlify is very easy to use and offers free hosting with custom domains.

### Steps:

#### Method A: Drag & Drop (Quickest)
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://www.netlify.com) and sign up/login
3. Drag and drop the `build` folder to Netlify
4. Your site will be live instantly!

#### Method B: Git Integration (Automatic Deploys)
1. Go to [netlify.com](https://www.netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your repository: `Portfolio-Website`
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. Click "Deploy site"
7. Netlify will automatically deploy on every push to your main branch!

**Custom Domain:** You can add a custom domain in Netlify settings.

---

## Option 3: Vercel ⭐⭐⭐

Vercel is excellent for React apps and offers great performance.

### Steps:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   Follow the prompts. It will detect React automatically.

3. For production deployment:
   ```bash
   vercel --prod
   ```

#### Or use Git Integration:
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects React - just click "Deploy"
5. Done! Your site is live.

---

## Option 4: Firebase Hosting

### Steps:
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create a new one
   - Public directory: `build`
   - Single-page app: `Yes`
   - Overwrite index.html: `No`

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## Option 5: AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Amplify will auto-detect the build settings
5. Click "Save and deploy"

---

## Environment Variables

If you're using GitHub API or Medium API, you'll need to set environment variables:

### For Netlify:
1. Go to Site settings → Environment variables
2. Add your variables:
   - `REACT_APP_GITHUB_TOKEN`
   - `GITHUB_USERNAME`
   - `USE_GITHUB_DATA`
   - `MEDIUM_USERNAME`

### For Vercel:
1. Go to Project settings → Environment Variables
2. Add your variables

### For GitHub Pages:
Create a `.env` file (but note: GitHub Pages doesn't support server-side env vars for free accounts)

---

## Recommended: Netlify or Vercel

Both are:
- ✅ Free
- ✅ Easy to set up
- ✅ Support custom domains
- ✅ Auto-deploy on git push
- ✅ Great performance
- ✅ Support environment variables

---

## Quick Deploy Commands

### GitHub Pages:
```bash
npm run deploy
```

### Netlify (after installing CLI):
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Vercel:
```bash
npm install -g vercel
vercel --prod
```

---

## Troubleshooting

### Build fails:
- Make sure all dependencies are in `package.json`
- Run `npm install` before building
- Check for any console errors

### Images not loading:
- Make sure image paths use `process.env.PUBLIC_URL` or relative paths
- Check that images are in the `public` folder or properly imported

### Routing issues:
- For GitHub Pages, you may need to add a `404.html` that redirects to `index.html`
- For SPA routing, configure your hosting provider accordingly

