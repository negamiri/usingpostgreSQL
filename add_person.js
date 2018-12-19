const settings = require ("./settings");
var knex = require('knex')({
    client: 'pg',
    connection: {
        "user": settings.user,
        "password": settings.password,
        "database": settings.database,
        "hostname": settings.hostname,
        "port": settings.port,
        "ssl": settings.ssl
    }
})

knex('famous_people')
.insert({
    first_name: process.argv[2],
    last_name: process.argv[3],
    birthdate: process.argv[4]
})
.asCallback((err, res)=>{
    if(err) {
        console.log("err: ", err)
    }
    knex.destroy();
})