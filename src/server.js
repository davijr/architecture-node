import app from './app.js'
import logger from './config/logger.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.info('Servidor rodando na porta ' + port)
})


