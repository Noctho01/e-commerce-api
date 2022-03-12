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

<code>RESPONSE: *application/json*, *Object*</code>
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

[RETORNAR](../README.md)

[SUBIR](#serviços-crud)