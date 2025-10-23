import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testMigration() {
  try {
    console.log('🧪 Testing Neon database connection...');
    
    if (!process.env.NEON_DATABASE_URL) {
      throw new Error('NEON_DATABASE_URL environment variable is required');
    }

    const sql = neon(process.env.NEON_DATABASE_URL);
    
    // Test 1: Check if table exists
    console.log('1️⃣ Checking if contact_submissions table exists...');
    const tableCheck = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_name = 'contact_submissions'
    `;
    
    if (tableCheck.length === 0) {
      throw new Error('contact_submissions table not found. Run migration first.');
    }
    console.log('✅ Table exists');
    
    // Test 2: Check table structure
    console.log('2️⃣ Checking table structure...');
    const columns = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions'
      ORDER BY ordinal_position
    `;
    
    console.log('📊 Table columns:');
    console.table(columns);
    
    // Test 3: Insert a test record
    console.log('3️⃣ Testing insert operation...');
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      event_type: 'test',
      event_date: '2024-12-31',
      guest_count: '50-100',
      budget: 'test',
      message: 'This is a test submission'
    };
    
    const insertResult = await sql`
      INSERT INTO contact_submissions (
        name, email, phone, event_type, event_date, 
        guest_count, budget, message
      ) VALUES (
        ${testData.name}, ${testData.email}, ${testData.phone}, 
        ${testData.event_type}, ${testData.event_date}, 
        ${testData.guest_count}, ${testData.budget}, ${testData.message}
      )
      RETURNING id, created_at
    `;
    
    console.log('✅ Test record inserted:', insertResult[0]);
    
    // Test 4: Query the test record
    console.log('4️⃣ Testing query operation...');
    const queryResult = await sql`
      SELECT * FROM contact_submissions 
      WHERE email = ${testData.email}
      ORDER BY created_at DESC
      LIMIT 1
    `;
    
    console.log('✅ Test record retrieved:', queryResult[0]);
    
    // Test 5: Clean up test record
    console.log('5️⃣ Cleaning up test record...');
    await sql`
      DELETE FROM contact_submissions 
      WHERE email = ${testData.email}
    `;
    
    console.log('✅ Test record deleted');
    
    console.log('\n🎉 All tests passed! Migration is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run the test
testMigration();
