import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Anunciante extends Model {	
		static associate (models) {
			this.hasMany(models.Produtos,{ foreignKey: 'anunciante_id', as: 'produtos' })
		}
	}
	
	Anunciante.init({
		nome: DataTypes.STRING,
		cpf: DataTypes.STRING,
		email: DataTypes.STRING,
		senha: DataTypes.STRING,
		numero_telefone: DataTypes.STRING,
		data_nascimento: DataTypes.STRING,
		cep: DataTypes.STRING,
		pais: DataTypes.STRING,
		estado: DataTypes.STRING,
		cidade: DataTypes.STRING,
		complemento: DataTypes.STRING,
		carteira_virtual: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Anunciante'
	})

	return Anunciante
}
