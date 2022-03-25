import Router from 'express-promise-router'
// import express from 'express';

// const app = express();
// app.use(express.json())

const livro = new Router()

const livros = [
  { id: 1, titulo: 'Senhor dos Anéis' },
  { id: 2, titulo: 'O Hobbit' }
]

livro.get('/', async (req, res) => {
  console.log('GET /')
  res.status(200).send('Curso de Node')
})

livro.get('/livros', async (req, res) => {
  console.log('GET /livros')
  res.status(200).json(livros)
})

livro.get('/livros/:id', async (req, res) => {
  console.log('GET /livros/:id')
  const filtered = livros.filter(item => { return item.id === Number(req.params.id) })
  res.status(200).json(filtered[0])
})

livro.post('/livros', async (req, res) => {
  console.log('POST /livros')
  livros.push(req.body)
  res.status(201).send('Livro cadastrado com sucesso.')
})

livro.put('/livros', async (req, res) => {
  console.log('PUT /livros')
  const livro = req.body
  livros[livro.id - 1].titulo = livro.titulo
  res.status(200).json(livro)
})

livro.delete('/livros/:id', async (req, res) => {
  console.log('DELETE /livros/:id')
  const { id } = req.params
  livros.splice(id - 1, 1)
  res.status(200).send(`Livro ${id} removido com sucesso`)
})

export default livro
