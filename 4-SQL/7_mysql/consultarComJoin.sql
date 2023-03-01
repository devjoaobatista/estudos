select * from estados e, cidades c 
where e.id = c.estado_id;

select e.nome as estado, 
       c.nome as cidade, 
       e.regiao as regiao
       from estados e, cidades c 
where e.id = c.estado_id;


-- Aqui estou dizendo qual coluna quero e informando querop
-- juntar informações de outra tabela, no on eu coloco a 
-- relação que quero. O select basicamente está a informação
-- está informando que colounas eu quero de cada tabela.
-- Se eu quise adicionar outro critério eu posso adicionar um end
-- no final do on e adicionar o novo filtro
select 
    e.nome as estado, 
    c.nome as cidade, 
    e.regiao as regiao
from estados e
inner join cidades c on e.id = c.estado_id