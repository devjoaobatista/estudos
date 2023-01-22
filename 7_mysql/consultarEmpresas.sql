select e.nome 'Empresa', c.nome 'Cidade Sede'
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede

-- posso colocar a sede = 1, mas colocando dessa forma ele
-- já entende que tem que trazer se for = 1