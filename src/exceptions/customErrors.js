class Conflito extends Error {
	constructor (message) {
		super(message)
		this.statusCode = 409
	}
}

class NotFound extends Error {
	constructor (message) {
		super(message)
		this.message = `${message} não encontrado`
		this.statusCode = 404
	}
}

class ValidationError extends Error {
	constructor (message) {
		super(message)
		this.statusCode = 400
	}
}

class UserInvalido extends Error {
	constructor () {
		super()
		this.message = 'Informe um email de usuario valido'
		this.statusCode = 400
	}
}

class TipoUsuario extends Error {
	constructor (tipoCorreto) {
		super(tipoCorreto)
		this.message = `Este é um serviço disponivel apenas para ${tipoCorreto}`
	}
}

class SenhaIncorreta extends Error {
	constructor () {
		super()
		this.message = 'Senha incorreta'
		this.statusCode = 400
	}
}

class TokenNotFound extends Error {
	constructor (tipoUsuario) {
		super(tipoUsuario)
		this.message = `Vocé precisa está logado como ${tipoUsuario} para acessar este serviço`
		this.statusCode = 401
	}
}

class CreateEntidadeError extends Error {
	constructor (message) {
		super(message)
		this.message = `${message} não pode ser criado devido erros internos`
		this.statusCode = 500
	}
}

export {
	Conflito,
	NotFound,
	ValidationError,
	UserInvalido,
	TipoUsuario,
	SenhaIncorreta,
	TokenNotFound,
	CreateEntidadeError
}
