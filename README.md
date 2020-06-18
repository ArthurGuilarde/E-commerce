<p align="center">

<img width="100" src="logo.png" alt="E-commerce">

</p>

<p align="center">
  <img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License">
</p>

<h2 align="center">E-commerce</h2>

Projeto desenvolvido com o obejtivo de treinar habilidades de desenvolvimento e aprender novas tecnologias, utilizo a licença do tipo MIT-licensed open source e o desenvolvimento é feito com objetivo de ajudar de alguma maneira a comunidade de Dev.

Se você deseja me ajudar, por favor considere:

- Mandar dicas de tecnologias.
- Mandar idéias de projetos.
- Sugerir melhorias.

E-mail para contato: arthur.nemi.g@gmail.com

# Quais tecnologias estão sendo usadas nesse projeto?

Estou utilizando no backend Node.js e no frontend React.
Me propus utilizar Graphql com o objetivo de aprender mais sobre essa tecnologia e em todos módulos busco utilizar Typescript para facilitar no desenvolvimento.

# Divisão do projeto

Cada linha do desenvolvimento está separada em um branch específico.

- [Branch backend](#Backend-instruções)
- Branch frontend
- Branch mobile

## Backend instruções

Instalando dependencias

```
yarn install
```

Iniciando servidor de desenvolvimento

```
yarn dev:server
```

Iniciando servidor de produção

```
yarn build
yarn prod:server
```

As configurações do banco de dados estão dentro do arquivo "ormconfig.json" estou utilizando o banco Postgres.

Recomendo a criação de uma instancia para teste com as seguintes informações:

```
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "123",
"database": "test"
```

Através do script abaixo você consegue intanciar um docker para teste

```
docker run --name CONTAINER_NAME -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres
```

# Documentation

Em breve.

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Arthur Guilarde
