const fs = require('fs')

const EXCLUDES = ['.git', ]

function findHtml (dirStr) {
  const dir = fs.readdirSync(dirStr)
  if (dir.includes('index.html')) {
    return dirStr
  } else {
    const htmlFile = dir.find(item => item.match(/html$/))
    return htmlFile ? dirStr + '/' + htmlFile : false;
  }
}

function generalFileMap (arguments) {
  const dir = fs.readdirSync('./')
  const map = {}
  dir.forEach(dirItem => {
    const isDir = fs.lstatSync(dirItem).isDirectory()
    if (isDir && !EXCLUDES.includes(dirItem)) {
      const link = findHtml(dirItem)
      if (link) {
        map[dirItem]=link
      }
    }
  })
  return map
}
const map = generalFileMap()
const mapStr = `
  window.map = ${JSON.stringify(map)}
`
fs.writeFileSync('./map.js', mapStr)