# Migration Guide: Supabase to Neon

This guide will help you migrate your magic show website from Supabase to Neon database.

## What Changed

### Dependencies
- **Removed**: `@supabase/supabase-js`, `supabase` CLI
- **Added**: `@neondatabase/serverless`, `pg`, `express`, `cors`, `dotenv`, `resend`

### Architecture Changes
- **Before**: Supabase Edge Functions
- **After**: Express.js server with API routes
- **Database**: Supabase → Neon PostgreSQL
- **Email**: Still using Resend (unchanged)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Neon Database
1. Create a Neon account at [neon.tech](https://neon.tech)
2. Create a new project
3. Get your connection string from the dashboard
4. Copy `env.example` to `.env` and fill in your values:
   ```bash
   cp env.example .env
   ```

### 3. Configure Environment Variables
Create a `.env` file with:
```env
NEON_DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
RESEND_API_KEY=your_resend_api_key_here
PORT=3001
NODE_ENV=development
```

### 4. Run Database Migration
```bash
npm run migrate
```

### 5. Start the Application
For development with both frontend and backend:
```bash
npm run dev:full
```

Or start them separately:
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run server
```

## File Structure Changes

### New Files
- `src/integrations/neon/client.ts` - Neon database client
- `src/integrations/neon/types.ts` - Database types
- `server.js` - Express server for API routes
- `api/contact-form.ts` - Vercel-compatible API route
- `scripts/migrate.js` - Database migration script
- `neon-migration.sql` - SQL migration file

### Modified Files
- `package.json` - Updated dependencies and scripts
- `src/components/Contact.tsx` - Updated to use new API endpoint

### Removed Files
- `src/integrations/supabase/` - Supabase client and types
- `supabase/` - Supabase configuration and functions

## API Endpoints

### Contact Form
- **URL**: `POST /api/contact-form`
- **Body**: 
  ```json
  {
    "name": "string",
    "email": "string", 
    "phone": "string (optional)",
    "eventType": "string",
    "eventDate": "string (optional)",
    "guestCount": "string (optional)",
    "budget": "string (optional)",
    "message": "string (optional)"
  }
  ```

### Health Check
- **URL**: `GET /api/health`
- **Response**: `{"status": "OK", "timestamp": "..."}`

## Database Schema

The `contact_submissions` table structure:
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_type TEXT NOT NULL,
  event_date DATE,
  guest_count TEXT,
  budget TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Deploy the frontend to Vercel
2. Use the `api/contact-form.ts` file as a Vercel serverless function
3. Set environment variables in Vercel dashboard

### Option 2: Railway/Render
1. Deploy the Express server (`server.js`)
2. Deploy the frontend separately
3. Update the API URL in the frontend

### Option 3: Self-hosted
1. Run `npm run build` to build the frontend
2. Serve the built files with the Express server
3. Deploy to your preferred hosting platform

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify your `NEON_DATABASE_URL` is correct
   - Check if your Neon database is active
   - Ensure SSL is enabled in the connection string

2. **Email Not Sending**
   - Verify your `RESEND_API_KEY` is correct
   - Check Resend dashboard for API usage limits
   - Ensure sender email is verified in Resend

3. **CORS Issues**
   - The server includes CORS headers
   - For production, update the CORS origin to your domain

4. **Migration Fails**
   - Check if the table already exists
   - Verify database permissions
   - Run the migration script with proper environment variables

## Testing

1. Start the development server: `npm run dev:full`
2. Open the website and navigate to the contact form
3. Submit a test form
4. Check the database for the new record
5. Verify emails are sent (check Resend dashboard)

## Rollback Plan

If you need to rollback to Supabase:
1. Restore the original `package.json` dependencies
2. Restore the Supabase client files
3. Update the Contact component to use Supabase functions
4. Remove the Express server files

## Support

For issues with:
- **Neon**: Check [Neon documentation](https://neon.tech/docs)
- **Resend**: Check [Resend documentation](https://resend.com/docs)
- **This migration**: Review this guide and check the code comments
