import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Carrinhosclientes extends Model {}

	Carrinhosclientes.init({
		quantidade: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Carrinhosclientes'
	})
	
	return Carrinhosclientes
}
