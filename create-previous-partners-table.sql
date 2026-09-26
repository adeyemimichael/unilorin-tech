-- Create previous_partners table for storing past sponsors/partners
-- No tier system - just logo, name, and year

CREATE TABLE IF NOT EXISTS previous_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  year INTEGER NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE previous_partners ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can view previous partners)
CREATE POLICY "Allow public read access to previous_partners"
  ON previous_partners
  FOR SELECT
  USING (true);

-- Allow all insert operations (simplified for admin portal)
CREATE POLICY "Allow all insert to previous_partners"
  ON previous_partners
  FOR INSERT
  WITH CHECK (true);

-- Allow all update operations (simplified for admin portal)
CREATE POLICY "Allow all update to previous_partners"
  ON previous_partners
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow all delete operations (simplified for admin portal)
CREATE POLICY "Allow all delete from previous_partners"
  ON previous_partners
  FOR DELETE
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_previous_partners_year ON previous_partners(year DESC);
CREATE INDEX IF NOT EXISTS idx_previous_partners_display_order ON previous_partners(display_order);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_previous_partners_updated_at
  BEFORE UPDATE ON previous_partners
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
