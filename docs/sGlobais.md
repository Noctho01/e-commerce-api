[RETORNAR](../README.md)

<br>

# SERVIÇOS GLOBAIS
> Serviços acessiveis a usuarios registrados e não registrados

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/clientes&color=eafde6&style=for-the-badge)

*Lista de clientes cadastrados*

<code>RESPONSE: *Array*</code>

~~~~json
[
    {
        "id": 532,
        "email": "fooBar@email.com",
        "nome": "Caio Lima",
        "pais": "Brasil"
    }
]
~~~~

**id**: integer, id do cliente/usuario registrado

**email**: string, email do cliente

**nome**: string, nome do cliente

**pais**: string, pais do cliente

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/clientes/id&color=eafde6&style=for-the-badge)

*Buscar cliente/usuario especifico*

<code>PARAMETRO: id</code>
~~~
id do cliente
ex: /clientes/532
~~~

<code>RESPONSE: *Object* </code>

~~~~json
{
    "email": "fooBar@email.com",
    "nome": "Caio Lima",
    "pais": "Brasil"
}
~~~~

**email**: string, email do cliente

**nome**: string, nome do cliente

**pais**: string, pais do cliente

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/catalogo&color=eafde6&style=for-the-badge)

*Lista de Jogos em catalogo*

<code>RESPONSE: *Array* </code>

~~~~json
[
    {
        "id": 328,
        "nome": "Elden Ring",
        "preco": 246.90,
        "estoque": 2,
        "plataforma": "PlayStation 4"

    }
]
~~~~

**id**: Integer, id do jogo

**nome**: String, nome do jogo

**preco**: Float, valor da unidade

**estoque**: Integer, quantidade disponivel para venda

**plataforma**: String, plataforma/console do jogo

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/produto/id&color=eafde6&style=for-the-badge)

*Buscar jogo especifico*

<code>PARAMETRO: id</code>
~~~
id do jogo
ex: /produto/328
~~~

<code>RESPONSE: *Object* </code>

~~~~json
{
    "nome": "Elden Ring",
    "preco": 246.90,
    "estoque": 2,
    "descricao": "Eaauo puaao udaao baibl deeoa aioee duaup",
    "anunciante": "Eduardo Pereira Pires",
    "plataforma": "PlayStation 4",
    "classificacao": "M",
    "generos": [
        "LUTA",
        "RPG",
        "AVENTURA"
    ]
}
~~~~

**nome**: String, nome do jogo

**preco**: Float, valor da unidade

**estoque**: Integer, quantidade disponivel para venda

**descricao**: String, descrição do produto/jogo

**anunciante**: String, nome anunciante do produto/jogo

**plataforma**: String, plataforma/console do jogo

**classificacao**: String, classificação indicativa

**generos**: Array(String), lista de generos do jogo

#

<br>
<br>

[RETORNAR](../README.md)

[SUBIR](#serviços-globais)
