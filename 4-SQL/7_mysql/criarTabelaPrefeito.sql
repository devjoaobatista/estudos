CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int UNSIGNED,
    PRIMARY KEY (id),
    unique key (cidade_id), 
    foreign KEY (cidade_id) references cidades (id)
 );