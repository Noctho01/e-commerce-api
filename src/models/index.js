import Sequelize from 'sequelize'
import { database as config } from '../config/variaveisAmbiente.js'

// importando models
import carrinhosClientes from './carrinhosClientes.js'
import produtosClientes from './produtosClientes.js'
import estadosProdutos from './estadosProdutos.js'
import classificacoes from './classificacoes.js'
import plataformas from './plataformas.js'
import anunciante from './anunciante.js'
import produtos from './produtos.js'
import cliente from './cliente.js'
import generos from './generos.js'

let sequelize = new Sequelize(config.database, config.username, config.password, config)

const db = {
	Carrinhosclientes: carrinhosClientes(sequelize, Sequelize.DataTypes),
	Produtosclientes: produtosClientes(sequelize, Sequelize.DataTypes),
	Estadosprodutos: estadosProdutos(sequelize, Sequelize.DataTypes),
	Classificacoes: classificacoes(sequelize, Sequelize.DataTypes),
	Plataformas: plataformas(sequelize, Sequelize.DataTypes),
	Anunciante: anunciante(sequelize, Sequelize.DataTypes),
	Produtos: produtos(sequelize, Sequelize.DataTypes),
	Cliente: cliente(sequelize, Sequelize.DataTypes),
	Generos: generos(sequelize, Sequelize.DataTypes)
}

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) db[modelName].associate(db)
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
