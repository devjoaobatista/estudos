-- select está filtrando por região e a sum é uma função ue está somando 
-- a linha população e colocando em uma coluna chamada
-- total, o group by agrupa os dados
SELECT 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc


-- média
SELECT 
    avg(populacao) as Total
from estados
