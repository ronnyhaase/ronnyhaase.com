const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const pug = require('pug')

const defaultOptions = {
  pattern: '**/!(_)*.pug',
  inDir: 'templates/',
  outDir: 'dist/',
}

const options = { ...defaultOptions }

void async function () {
  const { pattern, inDir, outDir } = options

  const files = glob.sync(`${inDir}${pattern}`)

  files.forEach(file => {
    const htmlFn = file
      .replace(inDir, outDir)
      .replace(/\.pug/, '.html')

    const html = pug.renderFile(file, {})

    fs.ensureDirSync(path.dirname(htmlFn))
    fs.writeFileSync(htmlFn, html)
  })
}()
