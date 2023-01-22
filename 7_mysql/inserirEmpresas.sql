insert empresas
    (nome, cnpj)
values
    ('Bradesco', 36739821379621),
    ('Vale', 484739500230),
    ('Cielo', 37374584648764);


alter table empresas modify cnpj varchar(20);

desc empresas
-- mostra as regras da tabela


insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1), (1, 2, 0), (2, 1, 0), (2, 2,1);