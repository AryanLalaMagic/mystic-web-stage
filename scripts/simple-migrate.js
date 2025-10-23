import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function runSimpleMigration() {
  try {
    console.log('🚀 Starting simple Neon database migration...');
    
    if (!process.env.NEON_DATABASE_URL) {
      throw new Error('NEON_DATABASE_URL environment variable is required');
    }

    const sql = neon(process.env.NEON_DATABASE_URL);
    
    // Step 1: Create the table
    console.log('1️⃣ Creating contact_submissions table...');
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        event_type TEXT NOT NULL,
        event_date DATE,
        guest_count TEXT,
        budget TEXT,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
      )
    `;
    console.log('✅ Table created');
    
    // Step 2: Create indexes
    console.log('2️⃣ Creating indexes...');
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
      ON contact_submissions(created_at DESC)
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
      ON contact_submissions(email)
    `;
    console.log('✅ Indexes created');
    
    // Step 3: Verify table exists
    console.log('3️⃣ Verifying table creation...');
    const result = await sql`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions'
      ORDER BY ordinal_position
    `;
    
    console.log('📊 Table structure:');
    if (result.length > 0) {
      console.table(result);
    } else {
      console.log('❌ No columns found in contact_submissions table');
    }
    
    console.log('✅ Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run the migration
runSimpleMigration();
