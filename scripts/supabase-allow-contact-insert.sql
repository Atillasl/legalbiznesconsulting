-- Run in Supabase SQL editor to allow anonymous web inserts into contact_messages
-- Only use if you understand the security implications (this allows public inserts).

-- Ensure RLS is enabled for the table (optional):
-- ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts from the anonymous key (web clients)
CREATE POLICY "Allow insert for anon" ON public.contact_messages
FOR INSERT
TO anon
USING (true)
WITH CHECK (true);

-- You can remove or tighten this policy later (e.g., by adding rate limiting or captcha checks).