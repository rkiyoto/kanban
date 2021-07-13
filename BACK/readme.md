## Rodando a API

Uma API de exemplo foi disponibilizada na pasta BACK.

Para rodá-la, faça:

```console
> cd BACK
> npm install
> npm run server
```

Ela responderá na porta 5000.

## Desafio

Você precisa criar um frontend de acordo com os requisitos abaixo, que deve ser desenvolvido na pasta "FRONT".

Para criar seu frontend você pode escolher entre duas tecnologias:

1. Javascript ou Typescript + REACT
2. Typescript + ANGULAR

## Requisitos

**Utilização da API**

A API que provemos nesse projeto utiliza JWT para autenticação, você deve fazer a seguinte requisição antes qualquer outra:

```
(POST) http://0.0.0.0:5000/login/

{ "login":"letscode", "senha":"lets@123"}
```

Feita a requisição você receberá um token em formato json. Esse token deve ser enviado em todas as requisições subsequentes pelo header Authorization de acordo com o padrão JWT.

```
Authorization : 'Bearer <token>'
```

Lembre-se de setar os headers Accept e ContentType para json em todas as requisições...

---

A API tem os seguintes entrypoints:

```
(GET)       http://0.0.0.0:5000/cards/
(POST)      http://0.0.0.0:5000/cards/
(PUT)       http://0.0.0.0:5000/cards/{id}
(DELETE)    http://0.0.0.0:5000/cards/{id}
```

---

**GET** obtém uma lista de cards.

A API retorna um array com o seguinte formato:

```
[
    {
        id:uuid
        titulo : string,
        conteudo: string,
        lista: string
    },
    ...
]
```

---

**POST** adiciona um novo card, passe-o pelo corpo da requisição com o seguinte formato:

```
{
    titulo : string,
    conteudo: string,
    lista: string
}
```

A api retornará o card completo como o id atribuído.

---

**PUT** altera um card existente, passe o id na URL e o card completo pelo corpo da requisição de acordo com o formato:

```
{
    id: uuid (o mesmo passado na URL)
    titulo : string,
    conteudo: string,
    lista: string
}
```

A api retornará o card completo que foi salvo.

---

**DELETE** remove um card existente, passe o id na URL.

A api retornará a lista dos cards que sobraram (igual ao GET).

```
[
    {
        id:uuid
        titulo : string,
        conteudo: string,
        lista: string
    },
    ...
]
```

---

**Atenção**: As rotas tem validações e retornos diferentes dependendo do resultado:

> POST e PUT retornam 400 se titulo, conteudo ou lista forem avaliados como falsy.
>
> PUT também retorna 400 se o id passado na URL não for igual ao do objeto passado no corpo da requisição.
>
> PUT e DELETE retornam 404 se não encontrarem um card com o id passado na URL.
>
> Todas as rotas retornam 401 se o token não for passado, for inválido, mal-formado ou expirado.

Ele responderá às requisições em http://localhost:5000.
