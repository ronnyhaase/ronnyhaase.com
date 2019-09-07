const fs = require('fs-extra')
const pug = require('pug')

;(function renderHtml () {
  fs.ensureDirSync(process.cwd() + '/dist')

  fs.writeFileSync(
    process.cwd() + '/dist/index.html',
    pug.renderFile('templates/index.pug', {}),
  )
})()
