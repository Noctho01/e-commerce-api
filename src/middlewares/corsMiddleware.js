module.exports = app => {
	app.use((req, res, next) => {
		res.set("Access-Control-Allow-Origin", "*")
		res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
		return next()
	})
}
