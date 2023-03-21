import fs from 'fs'
import path from 'path'

let data = []

function listarArquivos(dir) {
  const directories = fs.readdirSync(dir)

  for (const file in directories) {
    const filePath = path.join(dir, directories[file])
    const stats = fs.lstatSync(filePath)

    if (stats.isDirectory() || stats.isSymbolicLink()) {
      try {
        listarArquivos(filePath)
      } catch(err) {
        continue
      }
    } else {
      data.push({
        file: path.basename(filePath),
        path: filePath,
        size: stats.size,
        type: path.extname(filePath)
      })
    }
  }
}

listarArquivos('../example')
console.log(JSON.stringify({ data }, null, 2))