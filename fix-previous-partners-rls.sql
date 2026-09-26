-- Fix RLS policies for previous_partners table
-- Run this if you're getting RLS policy violation errors

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated insert to previous_partners" ON previous_partners;
DROP POLICY IF EXISTS "Allow authenticated update to previous_partners" ON previous_partners;
DROP POLICY IF EXISTS "Allow authenticated delete from previous_partners" ON previous_partners;
DROP POLICY IF EXISTS "Allow all insert to previous_partners" ON previous_partners;
DROP POLICY IF EXISTS "Allow all update to previous_partners" ON previous_partners;
DROP POLICY IF EXISTS "Allow all delete from previous_partners" ON previous_partners;

-- Create new simplified policies (no authentication check)
CREATE POLICY "Allow all insert to previous_partners"
  ON previous_partners
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow all update to previous_partners"
  ON previous_partners
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all delete from previous_partners"
  ON previous_partners
  FOR DELETE
  USING (true);

-- Public read should already exist, but recreate if needed
DROP POLICY IF EXISTS "Allow public read access to previous_partners" ON previous_partners;
CREATE POLICY "Allow public read access to previous_partners"
  ON previous_partners
  FOR SELECT
  USING (true);
