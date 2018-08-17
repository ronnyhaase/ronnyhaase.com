const { createServer } = require('http')

if (!process.env.REDIRECT_URL) {
  throw new Error('You must provide the REDIRECT_URL environment variable!')
}

const redirectUrl = process.env.REDIRECT_URL.replace(/\/$/, '') + '/'
const status = parseInt(process.env.STATUS, 10) || 301
const port = parseInt(process.env.PORT, 10) || 80

createServer((req, res) => {
  const location = `${redirectUrl}${req.url.substr(1)}`
  res.writeHead(status, { location })
  res.end()
}).listen(port)
