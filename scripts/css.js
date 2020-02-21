const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const fs = require('fs-extra')
const glob = require('glob')
const sass = require('node-sass')
const path = require('path')
const postcss = require('postcss')

const defaultOptions = {
  pattern: '**/!(_)*.s[a|c]ss',
  inDir: 'styles/',
  outDir: 'dist/',
}

const options = { ...defaultOptions }

void async function () {
  const { pattern, inDir, outDir } = options

  const files = glob.sync(`${inDir}${pattern}`)

  files.forEach(async file => {
    const cssFn = file
      .replace(inDir, outDir)
      .replace(/\.s(a|c)ss/, '.css')
    const mapFn = cssFn + '.map'

    const { css } = sass.renderSync({ file })
    const { css: ocss, map } = await postcss([autoprefixer, cssnano])
      .process(css, { from: undefined })

    fs.ensureDirSync(path.dirname(cssFn))
    fs.writeFileSync(cssFn, ocss)
    if (map) fs.writeFileSync(mapFn, map)
  })
}()
