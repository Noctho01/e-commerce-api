import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Generos extends Model {
		static associate (models) {
			this.belongsToMany(models.Produtos, { foreignKey: 'genero_id', through: 'Generosprodutos', as: 'produtos', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
		}
	}

	Generos.init({
		genero: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Generos'
	})
	
	return Generos
}
