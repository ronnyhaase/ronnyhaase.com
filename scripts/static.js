// TODO: Optimize optimizable assets (e.g. images)
const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')

const defaultOptions = {
  pattern: '**/*',
  inDir: 'static/',
  outDir: 'dist/static/',
}

const options = { ...defaultOptions }

void async function () {
  const { pattern, inDir, outDir } = options

  const files = glob.sync(`${inDir}${pattern}`)

  files.forEach(file => {
    const fn = file
      .replace(inDir, outDir)

    fs.ensureDirSync(path.dirname(fn))
    fs.copySync(file, fn)
  })
}()
