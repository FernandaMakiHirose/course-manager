# Criando Componentes com Atributos Interdependentes e Construindo Projetos 

## Comandos para o projeto (Feitos no Git Bash)
Instale na pasta raiz do projeto:
>npm install<br>

Instalar o Angular CLI:
>npm install -g @angular/cli@3.8.18

Na pasta "server":
>npm install

Em seguida na mesma pasta:
>node serve.js

Na raiz do projeto:
>ng serve

Para abrir o projeto no seu navegador digite:
>http://localhost:4200/courses

Para gerar um novo componente:
>ng generate component component-name

## Pré-requisitos
- HTML básico. <br>
- JavaScript básico. <br>
- Node.js. <br>
- Angular CLI. <br>
- Visual Studio Code. <br>

## Curiosidades de pastas
- Core: é uma pasta que comtêm uma regra de negócio maior, não são tão genéricos, componentes mais pesados e que não podem ser tão compartilhados.
- Shared: é uma pasta que contêm módulos e componentes muito pequenos que são compartilhados e genéricos que podem ser usadas ou não durente a aplicação. 
