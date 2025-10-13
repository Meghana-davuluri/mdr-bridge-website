# Quick Deployment Guide - Get Your Website Live in 5 Minutes!

## Method 1: Netlify Drop (Fastest - No Account Needed)

**Time: 2 minutes**

1. Go to: **https://app.netlify.com/drop**
2. Drag the `mdr-bridge-website` folder onto the page
3. Get instant live link like: `https://your-site-name.netlify.app`
4. Done! Share your link immediately

**Note:** Sites deployed via Drop stay live for 24 hours, then require an account to keep active.

---

## Method 2: Netlify with Account (Permanent & Free)

**Time: 5 minutes**

### Step 1: Create Account
1. Go to: **https://www.netlify.com**
2. Click "Sign Up" (free forever)
3. Use GitHub, GitLab, or Email to sign up

### Step 2: Deploy Website
1. After login, click **"Add new site"** → **"Deploy manually"**
2. Drag the `mdr-bridge-website` folder into the upload area
3. Wait 30 seconds for deployment
4. Your site is live! You'll get a URL like: `https://random-name-abc123.netlify.app`

### Step 3: Customize Site Name (Optional)
1. Go to **Site Settings** → **Site Details**
2. Click **"Change site name"**
3. Enter: `mdr-bridge` or `mdrbridge-consulting`
4. Your URL becomes: `https://mdr-bridge.netlify.app`

### Step 4: Connect Your GoDaddy Domain (When Ready)
1. In Netlify: **Domain Settings** → **Add custom domain**
2. Enter your GoDaddy domain (e.g., `mdrbridge.com`)
3. Netlify will show you DNS records to add
4. Go to GoDaddy DNS settings
5. Add the DNS records Netlify provided
6. Wait 10-30 minutes for DNS to update
7. Your site will be live on your custom domain with FREE SSL!

**Netlify DNS Records (typical):**
- Type: A Record → Value: `75.2.60.5`
- Type: CNAME → Name: www → Value: `your-site.netlify.app`

---

## Method 3: Vercel (Alternative to Netlify)

**Time: 5 minutes**

### Step 1: Create Account
1. Go to: **https://vercel.com**
2. Click "Sign Up" (free forever)

### Step 2: Deploy
1. Click **"Add New Project"**
2. Click **"Browse"** and select the `mdr-bridge-website` folder
3. Click **"Deploy"**
4. Done! Get instant live link

### Step 3: Add Custom Domain
1. Go to **Project Settings** → **Domains**
2. Add your GoDaddy domain
3. Follow DNS instructions in GoDaddy

---

## Method 4: GitHub Pages (For Tech-Savvy Users)

**Time: 10 minutes**

### Prerequisites
- GitHub account (free at github.com)
- Git installed on your computer

### Steps
1. Create new repository on GitHub named `mdr-bridge-website`
2. In terminal:
   ```bash
   cd /Users/Meghana/mdr-bridge-website
   git init
   git add .
   git commit -m "Initial commit - MDR Bridge website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/mdr-bridge-website.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Source: Deploy from main branch
5. Save
6. Your site will be at: `https://YOUR-USERNAME.github.io/mdr-bridge-website`

---

## Connecting GoDaddy Domain (Detailed Steps)

### For Netlify/Vercel:

**In GoDaddy:**
1. Log in to GoDaddy account
2. Go to **"My Products"** → **"DNS"** for your domain
3. Click **"Manage DNS"**

**Add these records (example for Netlify):**

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 75.2.60.5               | 600  |
| CNAME | www  | your-site.netlify.app   | 600  |

**Important:**
- Delete any existing A records pointing to GoDaddy parking page
- Keep MX records (for email) if you have them
- DNS changes take 10-60 minutes to propagate

### SSL Certificate
- Automatically provided FREE by Netlify/Vercel
- Activates within 24 hours after DNS setup
- Your site will have `https://` (secure)

---

## Recommended: Netlify

**Why Netlify is Best:**
- ✅ Easiest drag-and-drop deployment
- ✅ Automatic SSL certificates
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments when you update
- ✅ 100% free for your needs
- ✅ Excellent uptime and reliability
- ✅ Great for small business websites

---

## Quick Checklist

Before deploying:
- [ ] Test website locally (`open index.html`)
- [ ] Update email addresses in HTML and JS files
- [ ] Update phone number in HTML
- [ ] Add your logo (optional)

After deploying:
- [ ] Test all navigation links
- [ ] Test forms (contact & careers)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Share your live link!

---

## Need Help?

**Netlify Support:** https://www.netlify.com/support/
**Vercel Support:** https://vercel.com/support
**GoDaddy DNS Help:** https://www.godaddy.com/help/dns-management-19195

---

## Your Website is Ready! 🚀

Choose your preferred method above and your MDR Bridge website will be live in minutes!
