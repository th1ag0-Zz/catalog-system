const routes = require('express').Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs/promises')
const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile) 

const data = require('../data.json');
const multerConfig = require('./config/multer')

const localData = path.resolve(__dirname, '..', 'data.json')

// rotas get
routes.get('/api/products', (req, res) => {
  res.json(data)
})

// rotas post
routes.post(
  '/products',
  multer(multerConfig).array('file'),
  async (req, res) => {
    const arquivo = await readFileAsync(localData, "utf8")

    const {
      product,
      price,
    } = req.body

    const files = req.files;

    const images = files.map(item => item.filename)

    const newProduct = [
      ...JSON.parse(arquivo),
      {
        id: new Date(Date.now()),
        product, 
        price,
        images
      }
    ]

    await writeFileAsync(localData, JSON.stringify(newProduct))
    
    res.send()
  }
)

// rotas delete
routes.delete('/products/:id', async (req, res) => {
  // 2021-05-19T01:32:51.173Z
  const id = req.params.id

  const arquivo = await readFileAsync(localData, "utf8")

  // deletar o objeto
  const parsedFile = JSON.parse(arquivo.toString())
  const indice = parsedFile.findIndex(item => item.id === id)
  
  if (indice === -1) {
    return res.send('O usuario não existe')
  }

  const images = parsedFile[indice].images
  console.log(images)

  parsedFile.splice(indice, 1)

  const newProduct = [
    ...parsedFile
  ]

  await writeFileAsync(localData, JSON.stringify(newProduct))

  // deletar cada imagem do array

  images.map(async (image) => {
    const imageFile = path.resolve(__dirname, '..', 'uploads', image)
    try {
      await fs.unlink(imageFile); 
      // console.log('Arquivo deletado com sucesso');
    } catch (error) {
      console.error('Ocorreu um erro: ', error.message);
    }
  })

  res.send()
})

module.exports = routes;