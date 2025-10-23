import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigration() {
  try {
    console.log('🚀 Starting Neon database migration...');
    
    // Check if database URL is provided
    if (!process.env.NEON_DATABASE_URL) {
      throw new Error('NEON_DATABASE_URL environment variable is required');
    }

    // Initialize Neon client
    const sql = neon(process.env.NEON_DATABASE_URL);
    
    // Read the migration SQL file
    const migrationPath = join(__dirname, '..', 'neon-migration.sql');
    const migrationSQL = readFileSync(migrationPath, 'utf8');
    
    console.log('📄 Running migration SQL...');
    
    // Split SQL into individual commands and execute them one by one
    const commands = migrationSQL
      .split(';')
      .map(cmd => cmd.trim())
      .filter(cmd => cmd.length > 0 && !cmd.startsWith('--'));
    
    for (const command of commands) {
      if (command.trim()) {
        console.log(`Executing: ${command.substring(0, 50)}...`);
        await sql(command);
      }
    }
    
    console.log('✅ Migration completed successfully!');
    
    // Verify the table exists
    console.log('🔍 Verifying table creation...');
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
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run the migration
runMigration();
