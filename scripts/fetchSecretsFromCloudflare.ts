// ~/aether_scrolls/scripts/fetchSecretsFromCloudflare.ts

import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env.secretloader') })

const { CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, WORKER_NAME } = process.env

if (!CLOUDFLARE_API_TOKEN || !CLOUDFLARE_ACCOUNT_ID || !WORKER_NAME) {
  console.error('❌ Missing Cloudflare credentials. Check your .env.secretloader.')
  process.exit(1)
}

async function fetchSecrets() {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/workers/scripts/${WORKER_NAME}/secrets`
  const headers = {
    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    'Content-Type': 'application/json',
  }

  const res = await fetch(url, { headers })
  const data = await res.json()

  if (!data.success) {
    console.error('❌ Failed to fetch secrets:', data.errors)
    process.exit(1)
  }

  const secretsList = data.result

  if (!Array.isArray(secretsList)) {
    console.error('❌ Unexpected secrets format:', secretsList)
    process.exit(1)
  }

  let envContent = ''

  for (const secret of secretsList) {
    // Since Cloudflare **doesn't return the secret values** (for security reasons),
    // you can't actually pull the VALUE, only the NAME.
    envContent += `# SECRET: ${secret.name}\n`
    envContent += `${secret.name}=REDACTED_NEED_TO_SET_MANUALLY\n\n`
  }

  fs.writeFileSync(path.resolve(__dirname, '../.env'), envContent)
  console.log('✅ Pulled secret names. Now manually update the values once.')
}

fetchSecrets()