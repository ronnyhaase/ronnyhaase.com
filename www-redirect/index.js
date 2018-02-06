const { createServer } = require('http')

if (!process.env.REDIRECT_URL) {
  throw new Error('You must provide the REDIRECT_URL environment variable!')
}

const REDIRECT_URL = process.env.REDIRECT_URL.replace(/\/$/, '') + '/'
const STATUS = parseInt(process.env.STATUS, 10) || 301
const PORT = parseInt(process.env.PORT, 10) || 80

createServer((req, res) => {
  const Location = `${REDIRECT_URL}${req.url.substr(1)}`
  res.writeHead(STATUS, { Location })
  res.end()
}).listen(PORT)
