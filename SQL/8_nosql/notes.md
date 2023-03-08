- Os bancos não apenas relacionais são dividos em 4 grandes grupos:
    * Chaves de valor: Redis
    
    * Documentos: MongoDB, fortemente baseado em json, o mongoDB não tem schema e tem uma api, ele é case sensitive
    
    * Grafos: Neo4j, tem nós
    
    * Colunas: Bigtable, cassandra

- Temos uma dualidade entre os tipos de bancos (sql e nosql) no escalonamento. (vertical vs horizontal)
    * vertical: Tem os dados guardados em uma estrutura/servidor, precisa fazer upgrades na maquina com o aumenton das requisições (melhorando memoria, processador, armazenamento), os bancos sql são mais escalaveis dessa forma.
   
    * horizontal: divide os dados em várias maquinas, tem dados duplicados nos nós.

> Será que quando vamos projetar uma aplicação que utiliza mongoDB, precisamos estudar sobre estruturas de código em arvore para encontrar a melhor forma de localizar os dados necessários de forma mais rápida?

- instalação:
    * O Mongo na versão 6.0 precisa do mongoshell (o instalador está em tools no site do mongo) para rodar os comandos, é necessário adicionar os diretórios do bin do mongo e do mongoshell nas váriaveis de ambiente.

- Comandos básicos:
    * Show dbs: mostra os bancos
    
    * use nome do banco: entra no banco de dados (pode ser um que não existe)
    
    * db.createCollection('nome da coleção'): cria uma coleção
    
    * show collections: mostra as coleções.
    
    * db.nome da coleção.drop(): Apaga a coleção.
    
    * db.nome da coleção.insertOne(): insere dados no 
    formato json.
    
    * db.nome da coleção.find(): verifica os dados na coleção.
    
    * db.nome da coleção.findOne({valor do abjeto}): localiza um objeto com o valor informado. (obs: se eu colocar apenas o find e passar o valor, ele vai encontrar todos os objetos que tem aquele valor, caso seja o findOne, ele vai enviar o primeiro que encontrar).

    * db.nome da coleção.find({$or: [{valor do objeto}, {valor do obejto}])): metodo para localizar mais de um objeto, o "$" representa a expressão lógica que será usada na procura( ex: $and, $or, etc..).

    * db.nome da coleção.find(valor: ($exist: true)): Vai trazer todos os dados que tenham o atributo "valor".

    * db.nome da coleção.find().limit(2): limita o resultado da consulta para o número adicionado, no caso deste, limitará para 2 resultados.

    * db.nome da coleção.count(): contará o número de resultados.

    * db.nome da coleção.find({valorDoFiltro: valor}, {valorParaMostrar1: 1, ValorParaMostrar2: 1}): Irá filtrar os que possuem o valor do primeiro objeto e o segundo objeto vai dizer quais informações dos objetos filtrados devem ser mostrados no console. (coloque o número 1 nos valores que quer que seja mostrado, por padrão o id sempre é mostrado, para isso não acontecer coloque o id como atributo e 0 como o valor)

    // testei os comandos no mongoshell.