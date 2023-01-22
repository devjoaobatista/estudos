-- É possivel inserir o ID dessa forma, quando inserido ele vai
--  adicionar os outros inserts nos números após o ultimo id

INSERT INTO estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54);

INSERT INTO estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51);
