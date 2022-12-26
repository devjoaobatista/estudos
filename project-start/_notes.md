# Verificando os passos que conheço sobre criação de projetos

* Usar o comando "npm init -y" para iniciar o projeto.

* Usar o comando "npm install express" para instalar o express no projeto.

* Criar um arquivo com o nome ".gitignore" e escrever o comando para ignorar commit da pasta "node_modules".
__Nesse passo eu esqueci que colocamos o ponto no inicio   do nome para ser reconhecido como um arquivo git, esqueci que o comando era "/" e o nome da pasta ou arquivo, a barra representa a pasta onde se encontra o que queremos ocutar, no caso, estava na mesma pasta.

* Criar uma pasta com o nome "src" e adicionar o arquivo index.js dentro da pasta.
__Olhei no projeto para verificar o nome da pasta
    
* Usar o comando "npm install nodemon" para instalar o nodemon no projeto, para instalar globalmente adicionar o o comando "-g".
__Olhei no google para saber o que significa o "-g"

* Adicionar um script no package.json para rodar o projeto no terminal automaticamente quando salvar o projeto, o script se chama ' "start:dev": "nodemon src/index.js" ', sendo que o "start:dev" é o nome do script para chamar no terminal e o "nodemon src/index.js" é o caminho do arquivo que vai ser executado pelo nodemon.
__Olhei no arquivo criado para saber como adicionar o arquivo na dependência.

* Importar o express para o arquivo index.js com o código "import express from 'express';" e criar uma variável para recebe-lo, por exemplo: "const app = express()".
__O node apresentou a mensagem "SyntaxError: Cannot use import statement outside a module" e informou para "To load an ES module, set "type": "module" in the package.json". verifiquei o primeiro arquivo e ví que ele tem o "type" definido como "module" no json, adicionei o código no json e funcionou (tive que pesquisar no google).

* Adicionar o seguinte código: "app.listen (3000, () => { return console.log ("Servidor rodando"); });" para que o servidor escute a porta adicionada (no caso a porta 3000) e verifique se foi realizado algum solicitação no metodo http.

* Adicionar as rotas do express (get, post, put, delete) para receber e retornar as consultas. exemplo: app.get((require, response) => {return response.send("Todos os usuários"); }); 

* Testar no insomnia para verificar se as rotas estão funcionando.
__quando testei no insonmia não funcionou, percebi que esqueci de adicionar nas rotas o endereço que seria acessado, corrigir o código para o seguinte:
app.get("/server" ,(require, response) => {return response.send("Todos os usuários"); }); e depois adicionei o /server no insomnia e funcionou (Olhei o outro projeto criado no insomnia para descobrir isso)

* adicionar o metodo para tratar informações json enviadas com o seguinte código "app.use(express.json());"

* criar uma variável que recebe um array de objetos, sendo que cada objeto contem os dados de um usuário;

* Escrever o código para retornar todos os usuários na rota get

* Escrever o código para criar um novo usuário na rota post. o usuário será criado recebendo um json.
