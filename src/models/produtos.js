import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class Produtos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate (models) {
			this.belongsTo(models.Anunciante, { foreignKey: 'anunciante_id', as: 'anunciante' })
			this.belongsTo(models.Classificacoes, { foreignKey: 'classificacao_id', as: 'classificacao' })
			this.belongsTo(models.Plataformas, { foreignKey: 'plataforma_id', as: 'plataforma' })
			this.belongsToMany(models.Generos, { foreignKey: 'produto_id', through: 'Generosprodutos', as: 'generos', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
			this.belongsToMany(models.Cliente, { foreignKey: 'produto_id', through: 'Carrinhosclientes', as: 'carrinho' })
			this.hasMany(models.Produtosclientes, { foreignKey: 'produto_id', as: 'vendas' })
		}
	}

	Produtos.init({
		nome: DataTypes.STRING,
		descricao: DataTypes.TEXT,
		preco: DataTypes.FLOAT,
		estoque: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Produtos'
	})

	return Produtos
}
