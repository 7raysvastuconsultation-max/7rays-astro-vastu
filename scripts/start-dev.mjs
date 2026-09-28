import { spawn } from 'node:child_process'

console.log('🚀 Starting 7Rays Astro Vastu Backend API + Frontend Dev Server...')

const server = spawn('node', ['server/index.mjs'], {
  stdio: 'inherit',
  shell: true,
})

const vite = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
})

const cleanup = () => {
  console.log('\n🛑 Shutting down servers...')
  try {
    server.kill()
    vite.kill()
  } catch {
    // ignore
  }
  process.exit(0)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
