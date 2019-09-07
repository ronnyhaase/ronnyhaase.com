const fs = require('fs-extra')
const glob = require('glob')
const sass = require('node-sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

// WIP
const defaultOptions = {
  cwd: process.cwd(),
  glob: '**/!(_)*.scss',
  inDir: 'styles',
  outDir: 'dist',
}

const options = { ...defaultOptions }

async function compileScssFile (path) {
  const outDir = `${options.cwd}/${options.outDir}`
  const filename = path.basename(path)
  const fullPath = `${outDir}/${filename}`

  fs.ensureDirSync(dir)

  const { css } = sass.renderSync({ file: process.cwd() + '/styles/index.scss' })
  const { css: ocss, map } = await postcss([autoprefixer, cssnano]).process(css, { from: undefined })
  fs.writeFileSync(process.cwd() + '/dist/styles.css', ocss)
  if (map) fs.writeFileSync(process.cwd() + '/dist/styles.css.map', map)
}

function findFiles () {
  return glob.sync(`${cwd}/${inDir}/${glob}`)
}
// /WIP

;(async function compileScss () {
  fs.ensureDirSync(process.cwd() + '/dist')

  const { css } = sass.renderSync({ file: process.cwd() + '/styles/index.scss' })
  const { css: ocss, map } = await postcss([autoprefixer, cssnano]).process(css, { from: undefined })
  fs.writeFileSync(process.cwd() + '/dist/styles.css', ocss)
  if (map) fs.writeFileSync(process.cwd() + '/dist/styles.css.map', map)
})()
