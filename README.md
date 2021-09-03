# Criando Componentes com Atributos Interdependentes e Construindo Projetos 
## Requisitos
- Angular básico.
- JavaScript básico.
- Node 11 e Angular 8 instalados. 
- IDE (Eu usei o Visual Studio Code).

## Licença
Distribuido sob a licença MIT License. Veja `LICENSE` para mais informações.

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

## Curiosidades de pastas
- Core: é uma pasta que contêm uma regra de negócio maior, não são tão genéricos, componentes mais pesados e que não podem ser tão compartilhados.
- Shared: é uma pasta que contêm módulos e componentes muito pequenos que são compartilhados e genéricos, podendo ser usadas ou não durente a aplicação.
