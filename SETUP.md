# Protocol1 Website - Setup Guide

Your project is initialized with the following stack:

## ✅ Completed Setup

- **Next.js 16** - App Router with TypeScript
- **React 19** - Latest stable version
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first CSS
- **shadcn/ui** - Component library ready to use
- **Prisma 6** - ORM for database management
- **ESLint** - Code quality and linting

## 📋 Next Steps

### 1. **Set Up Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your API keys from the services below

### 2. **Database Setup (Neon PostgreSQL)**
   - Go to https://console.neon.tech/
   - Create a free account and project
   - Copy your connection string to `DATABASE_URL` in `.env.local`
   - Update `prisma/schema.prisma` with your data models
   - Run: `npx prisma migrate dev --name init`

### 3. **Authentication (Clerk)**
   - Go to https://dashboard.clerk.com/
   - Create an account and application
   - Copy your publishable and secret keys to `.env.local`
   - Install Clerk middleware in `src/middleware.ts`:
     ```typescript
     import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
     
     const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
     
     export default clerkMiddleware(async (auth, req) => {
       if (!isPublicRoute(req)) {
         await auth.protect();
       }
     });
     
     export const config = {
       matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
     };
     ```

### 4. **File Upload (UploadThing)**
   - Go to https://uploadthing.com/dashboard
   - Create an application
   - Copy your API token to `UPLOADTHING_TOKEN` in `.env.local`
   - Create `src/lib/uploadthing.ts` for upload configuration

### 5. **Database Schema Design**
   - Edit `prisma/schema.prisma`
   - Define your data models
   - Run migrations as needed:
     ```bash
     npx prisma migrate dev --name <migration_name>
     npx prisma db push  # Alternative: push changes without creating migration files
     ```

### 6. **Vercel Deployment Preparation**
   - Push your code to GitHub
   - Go to https://vercel.com/
   - Connect your GitHub repository
   - Add environment variables in project settings
   - Deploy with a single click

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Prisma commands
npx prisma studio          # Open Prisma Studio to view/manage data
npx prisma generate       # Generate Prisma client
npx prisma migrate dev    # Create and apply migrations
npx prisma db push        # Push schema changes to database

# ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── utils.ts         # Utility functions
│   └── uploadthing.ts   # Upload configuration (create this)
└── middleware.ts        # Clerk authentication middleware (create this)

prisma/
├── schema.prisma        # Data models
└── migrations/          # Migration history

public/                  # Static assets
```

## 🚀 Quick Start Command

After setting up environment variables:

```bash
npm run dev
# Open http://localhost:3000
```

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [UploadThing Docs](https://docs.uploadthing.com)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Neon PostgreSQL Docs](https://neon.tech/docs)

## 🎨 Adding shadcn/ui Components

Once set up, add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
# ... and many more
```

---

**Ready to start coding!** 🎉
