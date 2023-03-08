- Chave primaria (pk):
    * Elá é única
    * Não é vazia
    * Não muda
        
        Surrogate Key: chave artificial, um valor unico sem sentido para a tabela, chave cintética. (Via de regra nós usamos bastante esse tipo de chave)

        Natural key: chave natural do elemento, por exemplo um cpf.

    * É possível usar a chave primaria com duas colunas, mas não é comum

- Como podemos relacionar as tabelas?
    * Migrando a chave primaria da primeira tabela para uma nova coluna na outra tabela, essa chave é chamada de chave estrangeira, usamos o simbolo (fk)

    * Uma vez criada a relação entre as tabelas, não poderei apagar a tabela mãe (a não ser que apague os filhos primeiro), pois o banco de dados trabalha come esquemas

// até aqui ta fácil, to até com medo dessa facilidade kkkkk //

- é possível ter uma relação 1-1 usando a restrinção unique

- Pra ter uma relação de muitos para muitos eu posso criar uma tabela que tem as chaves primarias de duas tabelas, seria duas colunas com as chaves estrangeiras e essas colunas juntas seriam a chave primaria

- nunca faça uma relação bidirecional, ou seja, em uma relação 1 para 1, ou 1 para muitos, coloque a chave extrangeira em apenas uma das tabelas

- O Sql é dividade em 4 coisas:
    * dml: Data manipulation lenguage, insert, select, update, delete

    * ddl: Data definition lenguage, create, alter, drop. Tudo que vai definir o esquema do banco de dados

    * dcl: data control lenguage, grant, deny, revoke, dar permissoes e criar restrinções para os usuários

    * tcl: transation control lenguage, begin transetion, commit transetion, rollback, controle de transações, controle de troca de troca de valores, por exemplo transferência de valores de contas bancarias

- O sql  é case insensitive, ou seja, não tem problema colocar os comandos como maiusculo ou minusculo

- inner sãos os dados que tem relação, outer são os dados que não tem relação

- Tipos de joins (join só tras os dados que tem inner)
    * left join: tras tudo que tem na primeira tabela e os dados relacionados na segunda tabela

    * right join: Vai trazer os dados relacionados da primeira tabela e o conteudo da segunda tabela

    * Full join: pega tudo que tem nas duas tabelas (não suportado no mysql, tem como simular)