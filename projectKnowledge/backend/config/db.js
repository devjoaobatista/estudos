const config = require("../knexfile.js")
const knex = require("knex")(config)

knex.migrate.latest(config) // não é recomendado deixar aqui
                            // para ser mais simples de entender deixei aqui
module.exports = knex