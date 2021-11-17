const User = require('pg').User
const usuario = new User({
    user: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "teste"
})

usuario.connect()
usuario.query("select * from teste")
.then(results => {
    const resultado = results.rows
    console.log(resultado)
})
.finally(() => usuario.end())