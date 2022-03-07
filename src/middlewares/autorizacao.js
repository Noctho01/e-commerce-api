import { ValidateTokenOAuth } from '../services/oAuth.js'

export default (req, res, next) => {
	const token = req.cookies['Authorization']
	const tokenValido = new ValidateTokenOAuth(token, 'Cliente')
	req.user = tokenValido.payload
	console.log(req.user)
	return next()
}
