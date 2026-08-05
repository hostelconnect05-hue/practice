# Virtusa OA Practice

A LeetCode-style coding practice platform focused on three Virtusa Online Assessment problems:

- Minimum Index (Medium)
- Smallest Missing Even Number (Easy)
- 5 Days Challenge (Medium)

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Monaco Editor
- PostgreSQL + Prisma
- Judge0 API integration for run/submit

## Features

- LeetCode-like home and problem workspace
- Sidebar with all three problems
- Difficulty colors and solved checkmarks
- Run code on visible testcases
- Submit code on hidden testcases
- Verdicts: Accepted, Wrong Answer, Time Limit Exceeded, Memory Limit Exceeded, Compilation Error
- AI Hint button with progressive hints
- Editorial section with show/hide
- Progress tracking (Solved, Attempted, Success Rate)
- Light/Dark theme toggle (dark default)

## Project Structure

- `src/app` - routes and API handlers
- `src/components` - UI and problem workspace components
- `src/lib` - data loaders, Judge0 client, Prisma helpers
- `src/types` - shared TypeScript types
- `content/problems` - problem statements and metadata (JSON)
- `content/testcases/visible` - visible testcases (JSON)
- `content/testcases/hidden` - hidden testcases (JSON)
- `content/editorials` - editorial content (JSON)
- `content/templates` - starter code templates (JSON)
- `prisma` - schema and seed

## Environment Variables

Create `.env` from `.env.example`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/virtusa_oa?schema=public"
JUDGE0_API_URL="https://judge0-ce.p.rapidapi.com"
JUDGE0_API_KEY=""
JUDGE0_API_HOST="judge0-ce.p.rapidapi.com"
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client and sync schema:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

3. Start dev server:

```bash
npm run dev
```

## Docker

Run PostgreSQL + app with Docker Compose:

```bash
docker compose up --build
```

Then run Prisma sync/seed inside app container if needed:

```bash
docker compose exec app npm run db:push
docker compose exec app npm run db:seed
```

## Judge0 Notes

- If `JUDGE0_API_KEY` is missing, requests to RapidAPI-hosted Judge0 will fail.
- You can point `JUDGE0_API_URL` to your own Judge0 CE deployment.

## Problem Input Format

All templates expect stdin input format:

- First line: `n`
- Second line: `n` space-separated integers

Output should be a single answer line.
