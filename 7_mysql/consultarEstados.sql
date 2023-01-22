SELECT * FROM estados

select nome as 'nome do estado', sigla from estados
where regiao = 'sul'

select nome, regiao from estados
where populacao >= 10
order by populacao desc