import livros from './livro.js'

export default (app) => {
    app.use('/livro', livros)
}