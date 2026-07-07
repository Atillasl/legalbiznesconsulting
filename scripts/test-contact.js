import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

function parseEnv(envText) {
  const lines = envText.split(/\r?\n/)
  const res = {}
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)=(.*)$/)
    if (m) {
      res[m[1]] = m[2].trim()
    }
  }
  return res
}

async function main() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const envPath = path.resolve(__dirname, '..', '.env')
  if (!fs.existsSync(envPath)) {
    console.error('.env not found at', envPath)
    process.exit(1)
  }
  const envText = fs.readFileSync(envPath, 'utf8')
  const env = parseEnv(envText)
  const SUPABASE_URL = env.VITE_SUPABASE_URL
  const SUPABASE_KEY = env.VITE_SUPABASE_ANON_KEY
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Supabase URL or ANON key missing in .env')
    process.exit(1)
  }

  const url = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/contact_messages`
  const payload = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '000000000',
    subject: 'Test submission',
    message: 'This is a test from scripts/test-contact.js',
    status: 'new'
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      },
      body: JSON.stringify(payload)
    })

    const text = await res.text()
    console.log('Status:', res.status)
    console.log('Response body:', text)
    if (!res.ok) process.exit(2)
  } catch (err) {
    console.error('Fetch error:', err)
    process.exit(3)
  }
}

main()
