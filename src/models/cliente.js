import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Cliente extends Model {
		static associate (models) {
			this.belongsToMany(models.Produtos, { foreignKey: 'cliente_id', through: 'Carrinhosclientes', as: 'carrinho' })
			this.hasMany(models.Produtosclientes, { foreignKey: 'cliente_id', as: 'compras' })
		}
	}

	Cliente.init({
		nome: DataTypes.STRING,
		cpf: DataTypes.STRING,
		email: DataTypes.STRING,
		senha: DataTypes.STRING,
		numero_telefone: DataTypes.STRING,
		data_nascimento: DataTypes.DATEONLY,
		cep: DataTypes.STRING,
		pais: DataTypes.STRING,
		estado: DataTypes.STRING,
		cidade: DataTypes.STRING,
		complemento: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Cliente'
	})

	return Cliente
}
