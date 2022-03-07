import jwt from 'jsonwebtoken'
import { security } from '../config/variaveisAmbiente.js'
import { TokenNotFound } from '../exceptions/customErrors.js'

const secret = security.token

class CreateTokenOAuth {
	constructor (dadosToPayload) {
		this.dadosToPayload = dadosToPayload
		this.token = this._gerarToken()
	}

	_gerarToken () {
		return jwt.sign(this.dadosToPayload, secret, {
			algorithm: 'HS256',
			expiresIn: '1h'
		})
	}
}

class ValidateTokenOAuth {
	constructor (token, tipoUsuario) {
		this.token = this._formatarToken(token, tipoUsuario)
		this.payload = this._verificar(tipoUsuario)
	}

	_formatarToken (token, tipoUsuario) {
		try {
			if (!token) throw new TokenNotFound(tipoUsuario)
			return token.split(/ /g)[1]
		} catch (err) {
			throw new Error(err)
		}
	}

	_verificar (tipoUsuario) {
		try {
			return jwt.verify(this.token, secret)
		} catch (err) {
			throw new TokenNotFound(tipoUsuario)
		}
	}
}

export {
  CreateTokenOAuth,
  ValidateTokenOAuth
}
