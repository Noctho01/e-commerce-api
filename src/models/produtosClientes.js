import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Produtosclientes extends Model {
		static associate (models) {
			this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' })
			this.belongsTo(models.Produtos, { foreignKey: 'produto_id', as: 'produto' })
			this.belongsTo(models.Estadosprodutos, { foreignKey: 'estado_atual_id', as: 'estado' })
		}
	}

	Produtosclientes.init({
		valor_total: DataTypes.FLOAT,
		quantidade: DataTypes.INTEGER,
		forma_pagamento: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Produtosclientes'
	})

	return Produtosclientes
}
