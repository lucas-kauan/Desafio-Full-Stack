# Desafio Full-Stack

O back-end da aplicação ainda está sendo utilizado de forma local com a url - http://localhost:3001

Comando para instalação Front-End:

- yarn add @hookform/resolvers axios react react-dom react-hook-form react-icons react-router-dom react-toastify styled-components typescript yup @types/react @types/react-dom @types/styled-components

Comandos para bibliotecas Back-End:

- yarn add bcryptjs express express-async-errors jsonwebtoken node typeorm yup reflect-metadata pg pg-format dotenv ts-node-dev typescript 
@types/bcryptjs @types/jsonwebtoken @types/node @types/pg @types/pg-format @types/express


## Rota de login

### `POST /login`

- Recebe um body com o exemplo abaixo:
* {    
    email: felipe@mail.com,   
    password: felipe  
    }

- JSON(token)
- Status(200)


## Rotas de usuário
Criação de usuário

### `POST /users`

- Recebe um body com o exemplo abaixo:
* {     
    name: Felipe,   
    email: felipe@mail.com,   
  password: felipe,   
  telephone: 10291029281    
}

- JSON(   
    {   
        id: d26d38ce-ccdd-4efc-bf21-1c24679136de,   
        name: Felipe,   
        email: felipe@mail.com,   
        telephone: 10291029281,   
        isActive: true,   
        isAdmin: false,   
        createdAt: Thu Mar 23 2023 12:04:52 GMT-0300 (Horário Padrão de Brasília)   
}   
)
- Status(201)  
         
Rota de criação de contato
### `POST /users/:id/contact (ID do usuário)`

- Recebe o token e um body com o exemplo abaixo:
* {   
  name:Kenzie Academy,   
  email: kenzie@mail.com,   
  telephone: 29381909291   
}

- JSON(   
    {     
  id: 6b925dc0-45a5-474e-971a-63e1036c5306,   
  name: Kenzie Academy,   
  email: kenzie@mail.com,   
  telephone: 29381909291,   
  createdAt: Thu Mar 23 2023 12:12:23 GMT-0300 (Horário Padrão de Brasília)   
}   
)
- Status(201)  


Rota para listar todos os usuários

### `GET /users`

- Recebe o token (Rota para apenas para ADMIN)

- JSON(   
    [   
       {   
         id: d26d38ce-ccdd-4efc-bf21-1c24679136de,   
         name: Felipe,   
         email: felipe@mail.com,   
         telephone: 10291029281,   
         isAdmin: false,   
         isActive: true,   
         createdAt: Thu Mar 23 2023 12:04:52 GMT-0300 (Horário Padrão de Brasília),   
         contacts: [   
          {   
            id: fc6e42d5-515f-4c4e-8284-4c2476b3636a,   
	        name: Kenzie Academy,   
            email: kenzie@mail.com,   
            telephone: 29381909291,   
            createdAt: Thu Mar 23 2023 12:21:57 GMT-0300 (Horário Padrão de Brasília)    
          }   
        ]
    }
]
)
- Status(200)  


Rota para listar usuário por ID

### `GET /users/:id (ID do usuário)`

- Recebe o token (O usuário comum só pode ter acesso ao seu próprio user)

- JSON(   
       {   
         id: d26d38ce-ccdd-4efc-bf21-1c24679136de,   
         name: Felipe,   
         email: felipe@mail.com,   
         telephone: 10291029281,   
         isAdmin: false,   
         isActive: true,   
         createdAt: Thu Mar 23 2023 12:04:52 GMT-0300 (Horário Padrão de Brasília),   
         contacts: [   
          {   
            id: fc6e42d5-515f-4c4e-8284-4c2476b3636a,   
	        name: Kenzie Academy,   
            email: kenzie@mail.com,   
            telephone: 29381909291,   
            createdAt: Thu Mar 23 2023 12:21:57 GMT-0300 (Horário Padrão de Brasília)    
          }   
        ]
    }
)
- Status(200)  

Rota para alteração de dados

### `PATCH /users/:id (ID do usuário)`

- Recebe o token e um body que pode conter as informações do exemplo abaixo
tanto por completas como parcial:

* {   
  name: Silva,   
  email: silva@mail.com,   
  password: silva,   
  telephone: 20202020201   
}

- JSON(   
       {   
  id: d26d38ce-ccdd-4efc-bf21-1c24679136de,   
  name: Silva,   
  email: silva@mail.com,   
  telephone: 20202020201,   
  isActive: true,   
  isAdmin: false,   
  createdAt: Thu Mar 23 2023 12:04:52 GMT-0300 (Horário Padrão de Brasília)   
} 
)
- Status(200)  


Rota para deleção de usuário

### `DELETE /users/:id (ID do usuário)`

- Recebe o token

- JSON( { } )
- Status(200)  



## Rotas de contato

Rota para alteração de dados

### `PATCH /contact/:id (ID do contato)`

- Recebe o token e um body que pode conter as informações do exemplo abaixo
tanto por completas como parcial:

* {   
  name: Academy,   
  email: academy@mail.com,     
  telephone: 20202020201   
}

- JSON(   
       {   
  id: d26d38ce-ccdd-4efc-bf21-1c24679136de,   
  name: Academy,   
  email: academy@mail.com,   
  telephone: 20202020201,   
  createdAt: Thu Mar 23 2023 12:04:52 GMT-0300 (Horário Padrão de Brasília)   
} 
)
- Status(200)  


Rota para deleção de contato 

### `DELETE contact/:id (ID do usuário)`

- Recebe o token

- JSON( { } )
- Status(200)
