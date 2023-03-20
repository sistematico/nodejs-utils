import fs from 'fs'

const filenames = fs.readdirSync('../example/livros')

let arrayOfFiles = []
arrayOfFiles = filenames.map(filename => filename)

console.log(arrayOfFiles)
