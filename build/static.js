// TODO: Optimize optimizable assets (e.g. images)
const fs = require('fs-extra')

;(function copyStaticAssets() {
  fs.ensureDirSync(process.cwd() + '/dist')

  fs.copySync(process.cwd() + '/static', process.cwd() + '/dist/static')
})()
