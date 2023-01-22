CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int UNSIGNED not NULL,
    area DECIMAL (10,2),
    PRIMARY KEY (id), 
    foreign KEY (estado_id) references estados (id)
 );

 CREATE TABLE IF NOT EXISTS teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
 );

-- Como deletar tabelas
  DROP TABLE IF EXISTS teste;

