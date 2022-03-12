[RETORNAR](../README.md)

<br>

# SERVIÇOS CRUD
> CRUD do usuario registrado

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

*Cadastro de usuarios/cliente*

<code>REQUEST: *application/json*, *Object*</code>
~~~json
{
    "nome": "Pedro da Silva",
    "email": "pedro.silva123@gmail.com",
    "senha": "minhaSenha123",
    "cpf": "14826829078",
    "numero_telefone": "61984368592",
    "data_nascimento": "1998-03-07",
    "cep": "70070120",
    "pais": "Brasil",
    "estado": "Distrito Federal",
    "cidade": "Taguatinga",
    "complemento": "Quadra x Rua y Casa z"
}
~~~

<code>RESPONSE: *201*, *application/json*, *Object*</code>
~~~json
{
    "message": "created"
}
~~~

**nome**: String, nome completo cliente, *obrigatorio*

**email**: String, email valido, *obrigatorio*

**senha**: String, senha usuario, *obrigatorio* 

**cpf**: String, cpf valido, *Obrigatorio*

**numero_telefone**: String, numero telefone 11 digitos

**data_nascimento**: String, yyyy-mm-dd, *Obrigatorio* 

**cep**: String, cep valido, *Obrigatorio*

**pais**: String, *Obrigatorio*

**estado**: String

**cidade**: String

**complemento**: String, *Obrigatorio*

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=POST&color=268fbe&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/login&color=eafde6&style=for-the-badge)

*Cria um token de alteticação para ter acesso aos serviços de cliente*

<code>REQUEST: *application/json*, *Object*</code>
~~~json
{
    "email": "emailCadastrado123@gmail.com",
    "senha": "senhaCadastrada321"
}
~~~

<code>RESPONSE: *200*, *application/json*, *Object*</code>
~~~json
{
    "message": "token created"
}
~~~

O token será armazenado em um cookie no cache *Authorization* do navegador do cliente/usuario que expira em 1h apos sua criação (login)

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=DELETE&color=e35241&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente/logout&color=eafde6&style=for-the-badge)

*Deleta token criado pelo serviço de login, assim impedindo o acesso do usuario aos serviços do cliente*.

<code>RESPONSE: *200*, *application*, *Object*</code>
~~~json
{
    "message": "token deleted"
}
~~~

O token armazenado no cache cookie do navegador do usuario será deletado.

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=GET&color=77ab59&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

*Com o usuario logado como cliente (token criado atavez do serviço login), retorna todos os dados do cliente (menos a senha é claro)*

<code>RESPONSE: *200*, *application/json*, *Object*</code>
~~~json
{
	"id": 14,
	"nome": "Vinicius dos Santos Rodrigues",
	"cpf": "52003499075",
	"email": "vini54@gmail.com",
	"numero_telefone": "61984518883",
	"data_nascimento": "1999-04-12",
	"cep": "12345678",
	"pais": "Brasil",
	"estado": "Distrito Federal",
	"cidade": "Taguatinga",
	"complemento": "Quadra 12A Conjunto A Casa 17"
}
~~~

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=PUT&color=f5dd7e&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

*Com o usuario logado como cliente (token criado atavez do serviço login), informe os dados a serem alterados*

<code>REQUEST: *application/json*, *Object*</code>
~~~json
{
    "nome_da_propriedade1": "novo valor",
    "nome_da_propriedade2": "novo valor",
    "nome_da_propriedade3": "novo valor"
}
~~~

<code>RESPONSE: *201*, *application/json*, *Object*</code>
~~~json
{
    "message": "updated"
}
~~~

Informe o nome da propriedade e o valor para que seja feita a alteração no banco de dados, todas as propriedades estão sujeitas a alterações exeto o ID já que o mesmo não é uma propriedade de dominio do usuario

#

<br>
<br>

![](https://img.shields.io/static/v1?label=&message=DELETE&color=e35241&style=for-the-badge) ![](https://img.shields.io/static/v1?label=&message=/cliente&color=eafde6&style=for-the-badge)

*Com o usuario logado como cliente (token criado atavez do serviço login), apaga os dados do usuario cancelando seu cadastro como cliente*

<code>RESPONSE: *202*, *application/json*, *Object*</code>
~~~json
{
    "message": "deleted"
}
~~~

#

<br>
<br>

[RETORNAR](../README.md)

[SUBIR](#serviços-crud)
