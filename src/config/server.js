import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import router from '../router/index.js'

// instanciando app servidor
const server = express()

// configurando server
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())
server.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    return next()
})

// chamando rotas
server.use(router)

// middleware de tratamento de erros
server.use((err, req, res, next) => {
    if (err.statusCode) {
        return res
            .status(err.statusCode)
            .json({ message: err.message })

    } else if (err.message.indexOf("Unknown column") != -1) {
        return res
            .status(500)
            .json({ message: 'Carrinho Vazio' })

    } else {
        return res
            .status(500)
            .json({ message: err.message })
    }
})

export default server