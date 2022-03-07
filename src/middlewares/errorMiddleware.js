const errorlog = require('../../logs/errorLog.js')

module.exports = app => {
	app.use((error, req, res, next) => {
		//console.log(error)
		errorlog(error, req)
		if (error.statusCode) {
			return res
				.status(error.statusCode)
				.json({
					status: 'Error',
					description: error.message
				})
		} else if (error.message.indexOf("Unknown column") != -1) {
			return res
				.status(500)
				.json({
					status: 'Error',
					description: 'Carrinho Vazio'
				})
		} else {
			return res
				.status(500)
				.json({
					status: 'Error',
					description: error.message
				})
		}
	})
}
