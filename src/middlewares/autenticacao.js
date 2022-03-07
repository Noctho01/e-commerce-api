import { createHmac } from 'crypto'
import { security } from '../config/variaveisAmbiente.js'
import clienteServices from '../services/ClienteServices.js'
import { UserInvalido, SenhaIncorreta } from '../exceptions/customErrors.js'


const secret = security.crypto

export default async (req, res, next) => {
	const body = req.body

	const { id, email, senha } = await clienteServices.account(body.email)

	body.senha = createHmac('sha256', secret)
		.update(body.senha)
		.digest('hex')

	if (email != body.email) {
		throw new UserInvalido()
	} else if (senha != body.senha) {
		throw new SenhaIncorreta()
	}

	delete body.senha
	req.user = { id: id, email: email}
	console.log(req.user)
	return next()
}
