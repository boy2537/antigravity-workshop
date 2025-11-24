# Deployment Instructions

This project is set up as a monorepo with a `client` (Frontend) and `server` (Backend). For Vercel, the recommended approach is to deploy them as two separate projects from the same repository.

## 1. Database Setup (PostgreSQL)
Vercel does not support SQLite. You need a PostgreSQL database.
- **Option A**: Use Vercel Postgres (available in Vercel Storage).
- **Option B**: Use Supabase, Neon, or another provider.
- **Action**: Get your connection string (e.g., `postgres://user:pass@host:5432/db`).

## 2. Backend Deployment (`server/`)
1. Import the repository into Vercel.
2. **Project Name**: e.g., `expense-tracker-api`.
3. **Root Directory**: Edit and select `server`.
4. **Environment Variables**:
   - `DATABASE_URL`: Your PostgreSQL connection string.
5. **Deploy**.
6. Note the deployment URL (e.g., `https://expense-tracker-api.vercel.app`).

## 3. Frontend Deployment (`client/`)
1. Import the repository into Vercel *again*.
2. **Project Name**: e.g., `expense-tracker-web`.
3. **Root Directory**: Edit and select `client`.
4. **Framework Preset**: Vite (should be auto-detected).
5. **Environment Variables**:
   - `VITE_API_URL`: The URL of your backend deployment (e.g., `https://expense-tracker-api.vercel.app`).
     *Note: Do not add a trailing slash.*
6. **Deploy**.

## 4. Final Verification
- Open your Frontend URL.
- Try adding an expense.
- If it works, your full-stack app is live!