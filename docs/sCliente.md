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

<code>RESPONSE: *application/json*, *Object*</code>
~~~json

// IMPORTANTE!!

// NÃO INFORME DADOS REAIS, MESMO QUE OS MESMOS NÃO SEJAM SALVOS EM ALGUM REGISTRO DE DADOS, RECOMENDO QUE USE DADOS FALSOS JÁ QUE ESTA É APENAS UMA API SIMULADA!

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

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

**Necessario:** *usuario logado como cliente (token criado atavez do serviço login)*

#

<br>
<br>

[RETORNAR](../README.md)

[SUBIR](#serviços-crud)
