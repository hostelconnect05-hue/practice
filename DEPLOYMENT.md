# Vercel Deployment Checklist & Setup Guide

## 1. Database Setup (Free PostgreSQL)
1. Go to [Neon.tech](https://neon.tech) and create a free PostgreSQL database.
2. Copy the connection string provided (it includes `postgresql://...`).

## 2. Environment Variables needed on Vercel
In your Vercel project settings (**Settings -> Environment Variables**), add the following:

| Key | Example Value / Description |
| --- | --- |
| `DATABASE_URL` | `postgresql://<user>:<password>@<host>/neondb?sslmode=require` |
| `JUDGE0_API_URL` | `https://judge0-ce.p.rapidapi.com` |
| `JUDGE0_API_KEY` | Your RapidAPI key for Judge0 |
| `JUDGE0_API_HOST` | `judge0-ce.p.rapidapi.com` |

## 3. Pushing Database Schema & Seeding Data
Once your `DATABASE_URL` is set up:
- To create tables in production DB, run locally:
  ```bash
  npx prisma db push
  ```
- To seed initial data into production DB:
  ```bash
  npx prisma db seed
  ```

## 4. Deploying to Vercel
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Configure Vercel build script"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Add the **Environment Variables** listed above.
5. Click **Deploy**. Vercel will automatically run `prisma generate` and `next build`.
