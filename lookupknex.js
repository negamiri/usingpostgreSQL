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
.where('first_name', process.argv[2])
.orWhere('last_name', process.argv[2])
.asCallback((err, res) => {
    for (let key in res) {
        const person = res[key];
        const date = person.birthdate.toDateString("yyyy/MM/dd");
        console.log(`-${person.id}: ${person.first_name} ${person.last_name}, born ${date}`);
    }
    knex.destroy()
});
