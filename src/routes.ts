import livros from '@routes/livro'

export default (app) => {
  app.use('/livro', livros)
}
