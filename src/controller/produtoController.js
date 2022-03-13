import axios from 'axios'
import produtoServices from '../services/ProdutoServices.js'
import * as CustomErrors from '../exceptions/customErrors.js'
import { api_pagamento } from '../config/variaveisAmbiente.js'

class ProdutoController {
	// ----------------------------------------------- Carrinho Cliente ------------------------------------------------------

	async addProdutoCarrinho(req, res) {
		const userId = req.user.id
		const { quantidade } = req.body
		const { produtoId } = req.params
		await produtoServices.addProdutoCarrinho(quantidade, produtoId, userId)
		return res
			.status(201)
			.json({ message: 'added' })
	}

	async getCarrinho(req, res) {
		const userId = req.user.id
		const carrinho = await produtoServices.getCarrinho(userId)
		return res
			.status(200)
			.json(carrinho)
	}

	async updateProdutoCarrinho(req, res) {
		const userId = req.user.id
		const dataToUpdate = req.body
		const { produtoId } = req.params
		await produtoServices.updateProdutoCarrinho(dataToUpdate, produtoId, userId)
		return res
			.status(200)
			.json({ message: 'updated' })
	}

	async deleteProdutoCarrinho(req, res) {
		const userId = req.user.id
		const { produtoId } = req.params
		await produtoServices.deleteProdutoCarrinho(produtoId, userId)
		return res
			.status(201)
			.json({ message: 'deleted' })
	}


	// ----------------------------------------------- Comprar Produto ---------------------------------------------------------
	async previsionPaymentSlip(req, res) {
		const userId = req.user.id
		const resultAnalise = await produtoServices.reviewProdutos(userId)
		const { paymentSlip, produtos } = await produtoServices.generatePaymentSlip(resultAnalise, userId)
		delete paymentSlip.nome_cartao

		produtos.forEach(produto => {
			delete produto.id
			delete produto.em_estoque
		})

		return res
			.status(200)
			.json({
				paymentSlip,
				produtos
			})
	}

	async buyProcessProdutos(req, res) {
		const userId = req.user.id
		const { func } = req.params

		const configAxios = {
			method: 'post',
			url: api_pagamento + "" + func || `http://localhost:3222/${func}`,
			data: {
				nome: req.body.nome,
				numero: req.body.numero,
				dataVencimento: req.body.dataVencimento,
				cvc: req.body.cvc
			}
		}

		const resultAnalise = await produtoServices.reviewProdutos(userId)
		const { extrato, produtos} = await produtoServices.generatePaymentSlip(resultAnalise, userId, req.body.nome)
		
		// consumindo api de pagamento de boleto
		const resultadoPagamento = await axios(configAxios)

		if (resultadoPagamento.data.error) {
			throw new CustomErrors.ValidationError(resultadoPagamento.data.message)
		}

		const idsProdutos = []
		for (const produto of produtos) {
			idsProdutos.push(produto.id)
		}
	
		// update Clienteprodutos
		await produtoServices.setClienteProdutos(produtos, userId, 'CreditCard')

		// update Produtos
		for (const produto of produtos) {
			await produtoServices.update({ estoque: produto.em_estoque } , produto.id)
		}

		// apagar produto do carrinho
		await produtoServices.deleteProdutoCarrinho(idsProdutos, userId)
		
		return res
		.status(200)
		.json({
			pagamento: "Aprovado",
			extrato
		})
	}

	async getClienteProdutos(req, res) {
		const userId = req.user.id
		const produtos = await produtoServices.getClienteProdutos(userId)	
		return res
			.status(200)
			.json(produtos)
	}

	async catalog(req, res) {
		const inCatalog = await produtoServices.catalog()
		return res
			.status(200)
			.json(inCatalog)
	}

	async getProduto(req, res) {
		const produtoId = req.params.id
		const produto = await produtoServices.getProduto(produtoId)
		return res
			.status(200)
			.json(produto)
	}
}

export default new ProdutoController()