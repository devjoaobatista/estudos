update estados
set nome = 'Maranhão'
where sigla = 'MA'

SELECT nome from estados where sigla = 'MA'

update estados
set nome = 'Paraná', 
    populacao = 11.32
where sigla ='PR'


SELECT est.nome, sigla, populacao from estados est where sigla = 'PR'
