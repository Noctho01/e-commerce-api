import { Router } from 'express'
import resolver from '../jobs/resolver.js'
import middleware from '../middlewares/index.js'
import clienteController from '../controller/clienteController.js'
import produtoController from '../controller/produtoController.js'

const router = new Router()

/* CRUD */
router
	.post('/cliente', middleware.validacao, resolver(clienteController.create)) 		// criar Cliente
	.get('/cliente', middleware.autorizacao, resolver(clienteController.account)) 		// ver dados Cliente
	.get('/clientes/:id', resolver(clienteController.getCliente)) 						// ver dados Cliente especifico
	.get('/clientes', resolver(clienteController.listClientes))							// ver lista de Clientes
	.put('/cliente', middleware.autorizacao, resolver(clienteController.update)) 		// atualizar dados do Cliente
	.delete('/cliente', middleware.autorizacao, resolver(clienteController.delete)) 	// deletar Cliente

// Serviços Cliente
router
	.get('/catalogo', resolver(produtoController.catalog))
	.get('/produto/:id', resolver(produtoController.getProduto))
	.get('/cliente/carrinho', middleware.autorizacao, resolver(produtoController.getCarrinho))
	.get('/cliente/carrinho/extrato', middleware.autorizacao, resolver(produtoController.previsionPaymentSlip))
	.get('/cliente/produtos', middleware.autorizacao, resolver(produtoController.getClienteProdutos))
	.post('/cliente/carrinho/:produtoId', middleware.autorizacao, resolver(produtoController.addProdutoCarrinho))
	.post('/cliente/carrinho/solicitar/:func', middleware.autorizacao, resolver(produtoController.buyProcessProdutos))
	.put('/cliente/carrinho/:produtoId', middleware.autorizacao, resolver(produtoController.updateProdutoCarrinho))
	.delete('/cliente/carrinho/:produtoId', middleware.autorizacao, resolver(produtoController.deleteProdutoCarrinho))

/* LOGIN AUTENTICAÇÃO */
router
	.post('/cliente/login', resolver(middleware.autenticacao), resolver(clienteController.login))	// autenticação e login (gera token JWT) do Cliente
	.delete('/cliente/logout', middleware.autorizacao, resolver(clienteController.logout))			// logout do Cliente

export default router
