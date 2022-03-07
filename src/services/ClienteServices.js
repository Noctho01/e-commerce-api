import model from '../models/index.js'
import * as CustomErrors from '../exceptions/customErrors.js'

const Cliente = model.Cliente

class ClienteService {
	async create(cliente) {
		const errors = {}
		const clientes = await Cliente.findAll({ attributes: ['email', 'cpf'] })
		if (clientes.find(user => user.email === cliente.email)) errors.email = 'este email já foi cadastrado'
		if (clientes.find(user => user.cpf === cliente.cpf)) errors.cpf = 'este cpf já foi cadastrado'
		if (Object.keys(errors).length > 0) throw new CustomErrors.Conflito(errors)
		const resultCreate = Cliente.create(cliente)
		if (!resultCreate) throw new CustomErrors.CreateEntidadeError('Cliente')
	}

	async account(clienteEmail) {
		const cliente = await Cliente.findOne({ where: { email: clienteEmail }})
		if (!cliente) throw new CustomErrors.NotFound('Cliente')
		return cliente
	}

	async update (dataToUpdate, clienteId) {
		const errors = {}
		const cliente = await Cliente.findByPk(clienteId)
		if (!cliente) throw new CustomErrors.NotFound('Cliente')

		Object.keys(dataToUpdate).forEach(prop => {
			if (cliente[prop] === undefined) errors[prop] = 'Este campo não existe'
			cliente[prop] = dataToUpdate[prop]
		})

		if (Object.keys(errors).length > 0) throw new CustomErrors.Conflito(errors)
		await cliente.save()
		return cliente
	}

	async delete(clienteId) {
		const resultDelete = await Cliente.destroy({ where: { id: clienteId }})
		if (!resultDelete) throw new CustomErrors.Conflito('Está conta não pode ser deletada, conflitos internos')
	}

	async getCliente(clienteId) {
		const cliente = await Cliente.findOne({
			where: { id: clienteId },
			attributes: ['nome', 'email', 'pais']
		})
		if (!cliente) throw new CustomErrors.NotFound('Cliente')
		return cliente
	}

	async listClientes() {
		const clientes = await Cliente.findAll({ attributes: ['id', 'nome', 'email', 'pais'] })
		if (!clientes) throw new CustomErrors.NotFound('Clientes')
		return clientes
	}
}

export default new ClienteService()