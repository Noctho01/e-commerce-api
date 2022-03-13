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

<br>
<br>

<code>RESPONSE: *404*, *application/json*, *Object*</code>
~~~json
{
    "message": "Carrinho está vazio"
}
~~~

#

<br>
<br>

[RETORNAR](../README.md)

[SUBIR](#serviços-crud)
