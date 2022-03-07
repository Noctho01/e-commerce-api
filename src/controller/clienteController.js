import clienteService from '../services/ClienteServices.js'
import { CreateTokenOAuth } from '../services/oAuth.js'

class ClienteController {
    login(req, res) {
        const { user } = req
        const jwt = new CreateTokenOAuth(user)
        return res
            .status(200)
            .cookie('Authorization', 'Bearer ' + jwt.token)
            .json({ message: 'connected' })
    }

    logout(req, res) {
        return res
            .status(200)
            .clearCookie('Authorization')
            .json({
                status: 'Ok',
                message: 'disconnected'
            })
    }

    async create(req, res) {
        const clienteData = req.body
        await clienteService.create(clienteData)
        return res
            .status(201)
            .json({
                status: 'Ok',
                message: 'created'
            })
    }

    async account(req, res) {
        const clienteEmail = req.user.email
        const cliente = await clienteService.account(clienteEmail)
        cliente.senha = undefined
        return res
            .status(200)
            .json({
                status: 'Ok',
                message: 'accessed',
                data: cliente
            })
    }

    async update(req, res) {
        const { body: dataToUpdate } = req
        const { id: clienteId } = req.user
        const cliente = await clienteService.update(dataToUpdate, clienteId)
        
        if (dataToUpdate.email) {
            const jwt = new CreateTokenOAuth({
                id: cliente.id,
                email: cliente.email
            })
            
            res.cookie('Authorization', 'Bearer ' + jwt.token)
        }
    
        return res
            .status(201)
            .json({
                status: 'Ok',
                message: 'updated'
            })
    }

    async delete(req, res) {
        const { id: clienteId } = req.user
        await clienteService.delete(clienteId)
        return res
        .status(202)
        .json({
            status: 'Ok',
            message: 'deleted'
        })
    }

    async getCliente(req, res) {
        const { id: clienteId } = req.params
        const cliente = await clienteService.getCliente(clienteId)
        return res
            .status(200)
            .json({
                status: 'Ok',
                message: 'geted',
                data: cliente
            })
    }

    async listClientes(req, res) {
        console.log('oi')
        const clientes = await clienteService.listClientes()
        return res
            .status(200)
            .json({
                status: 'Ok',
                message: 'geted',
                data: clientes
            })
    }
}

export default new ClienteController()