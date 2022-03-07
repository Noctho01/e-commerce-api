import server from './config/server.js'
import { port as PORT } from './config/variaveisAmbiente.js'

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})