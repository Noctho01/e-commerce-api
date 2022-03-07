import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

const __fileurl = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileurl)

config({
    path: process.env.NODE_ENV === 'dev' 
        ? resolve(__dirname, '.env.dev')
        : resolve(__dirname, '.env.pro')
})

const variaveis = {
    database: {
        username: process.env.USER_NAME,
        password: process.env.PSW_DB,
        database: process.env.NAME_DB,
        host: process.env.HOST_DB,
        dialect: process.env.DIALECT,
        port: process.env.PORT_DB,
        define: { timestamps: false }
    },
    security: {
        token: process.env.TOKEN_SECRET,
        crypto: process.env.HASHE_SECRET
    },
    port: process.env.PORT
}

export const {database, security, port} = variaveis