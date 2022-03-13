[RETORNAR](../README.md)

<br>

# SERVIÇOS CLIENTE
> Serviços Cliente (carrinho de compras, solicitar jogos, pagamento). Vale lembrar que estes serviços são acessiveis a usuarios com token de autenticação de cliente, consulte a documentação [Serviços CRUD](./sCrud.md)

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/carrinho&color=eafde6&style=for-the-badge)

Retorna uma lista de jogos adicionados ao carrinho do cliente.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>RESPONSE: *200*, *application/json*, *Array*</code>
~~~json
[
    {
        "id": 8,
        "nome": "The Blue Kingdon",
        "preco": 133.16,
        "estoque": 1,
        "plataforma": "Nintendo Switch",
        "quantidade": 1
    }
]
~~~

**id**: Integer, id do jogo

**nome**: String, nome do jogo

**preco**: Float, valor da unidade

**estoque**: Integer, quantidade disponivel para venda

**plataforma**: String, plataforma/console do jogo

**quantidade**: Integer, numero de unidades solicitadas

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/carrinho/id&color=eafde6&style=for-the-badge)

Adiciona jogos ao carrinho de compras do cliente.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>PARAMETRO: *id*</code>
~~~
id do jogo/produto
ex: /cliente/carrinho/8
~~~

<code>REQUEST: *application/json*, *Object*</code>
~~~json
{
    "quantidade": 2
}
~~~

**quantidade**: Integer, numero de unidades solicitadas pelo cliente

<code>RESPONSE: *201*, *application/json*, *Object*</code>
~~~json
{
    "message": "added"
}
~~~

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/carrinho/solicitar/id&color=eafde6&style=for-the-badge)

Efetua compra dos produtos existentes no carrinho de compras

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>PARAMETRO: *id*</code>

O id representa qual resposta simular ao usar o cartão de credito simulado. Atualmente não estou usando uma api para pagamento, criei uma api propria que simula isso (o motivo é devido ao numero limite de requisiçoes disponiveis pelas plataformas que disponibilizão api para teste).

- **0**: compra aprovada
- **1**: nome cartão incorreto
- **2**: numero cartão incorreto
- **3**: data incorreta
- **4**: cvc invalido
- **5**: sem saldo na conta
- **6**: sem limite disponivel

~~~
ex: /cliente/carrinho/solicitar/0
~~~

<code>REQUEST: *application/json*, *Object*</code>
~~~json

// IMPORTANTE!!

// NÃO INFORME DADOS REAIS, MESMO QUE OS MESMOS NÃO SEJAM SALVOS EM ALGUM REGISTRO DE DADOS,
// RECOMENDO QUE USE DADOS FALSOS JÁ QUE ESTA É APENAS UMA API SIMULADA!

{
    "nome": "Ana Clara da Silva",
    "numero": "0617655",
    "dataVencimento": "2002/05/12",
    "cvc": "123"
}
~~~

**nome**: String, nome registrado no cartão de credito **falso** 

**numero**: String, numero do cartão de credito **falso** 

**dataVencimento**: String, yyyy/05/12

**cvc**: String, codigo de verificação **falso** 

<code>RESPONSE: *200*, *application/json*, *Object*</code>
~~~json
{
    "pagamento": "Aprovado"
}
~~~

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/carrinho/extrato&color=eafde6&style=for-the-badge)

Gera um extrato com base nos jogos existentes no carrinho de compra do cliente, nada é registrado ainda, somente uma simulação do valor total da compra caso seja feita.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>RESPONSE: *200*, *application/json*, *Object*</code>
~~~json
{
    "paymentSlip": {
        "cliente": "Ana Clara da Silva",
        "valor_total": 48.68
    },
    "produtos": [
        {
            "nome": "God of War 1",
            "preco": 48.68,
            "quantidade": 1
        }
    ]
}
~~~

**paymentSlip**: Object, dados da compra

**cliente**: String, nome do comprador

**valor_total**: Float, valor total da compra

**produtos**: Array, lista de jogos que seram comprados

**nome**: String, nome do produto/jogo

**preco**: Float, valor total das unidades deste produto/jogo

**quantidade**: Integer, numero de unidades solicitadas

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=PUT&color=f5dd7e&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/carrinho/id&color=eafde6&style=for-the-badge)

Altera produtos/jogos que estão no carrinho de compras do cliente.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>PARAMETRO: *id*</code>
~~~
id do produto existente no carrinho de compras do cliente
ex: /cliente/carrinho/8
~~~

<code>REQUEST: *application/json*, *Object*</code>
~~~json
{
    "quantidade": 3
}
~~~

**quantidade**: Integer, novo valor de unidades deste produto para adicionar ao carrinho

<code>RESPONSE: *201*, *application/json*, *Object*</code>
~~~json
{
    "message": "Updated"
}
~~~

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=DELETE&color=e35241&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=cliente/carrinho/id&color=eafde6&style=for-the-badge)

Remove produto/jogo do carrinho de compras do cliente.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>PARAMETRO: *id*</code>
~~~
id do produto existente no carrinho de compras do cliente
ex: /cliente/carrinho/8
~~~

<code>RESPONSE: *201*, *application/json*, *Object*</code>
~~~json
{
    "message": "Deleted"
}
~~~

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/produtos&color=eafde6&style=for-the-badge)

Retorna lista dos dados de produtos comprados pelo cliente.

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

<code>RESPONSE: *200*, *application/json*, *Array*</code>
~~~json
[
    {
        "id": 14,
        "quantidade": 2,
        "valor_total": 48.68,
        "forma_pagamento": "CreditCard",
        "produto": "God of War 1",
        "estado": "Produto Solicitado"
    }
]
~~~

**id**: Integer, id de registro da compra (não é o id do produto nem do cliente)

**quantidade**: Integer, numero de unidades solicitadas pelo cliente

**valor_total**: Float, valor total pago por esta(s) unidade(s)

**forma_pagamento**: String, atualmente a api simula somente "pagamentos" com cartão de credito

**produto**: String, nome do produto/jogo solicitado

**estado**: String, estado da compra do produto/jogo

- "Produto Solicitado"
- "Solicitação Aprovada"
- "Solicitação Recusada"
- "Produto Enviado"
- "Produto Entregue"
- "Concluido"
- "Problemas"

#

<br>
<br>

[RETORNAR](../README.md)

[SUBIR](#serviços-crud)
