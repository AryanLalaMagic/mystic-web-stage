-- Neon Database Migration Script
-- Run this script in your Neon database console or via CLI

-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_type TEXT NOT NULL,
  event_date DATE,
  guest_count TEXT,
  plan TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for better performance when querying by date
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

-- Create an index for email lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
ON contact_submissions(email);

-- Optional: Create a view for recent submissions (last 30 days)
CREATE OR REPLACE VIEW recent_contact_submissions AS
SELECT 
  id,
  name,
  email,
  phone,
  event_type,
  event_date,
  guest_count,
  plan,
  message,
  created_at
FROM contact_submissions
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;

-- Grant necessary permissions (adjust as needed for your setup)
-- Note: Neon handles permissions differently than traditional PostgreSQL
-- You may need to configure these through the Neon console

-- Example: If you need to allow public access for form submissions
-- (This is typically handled through your application's connection string)
-- GRANT INSERT ON contact_submissions TO PUBLIC;

-- Verify the table was created
SELECT 
  table_name, 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;
