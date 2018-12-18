const pg = require("pg");
const settings = require ("./settings");

const client = new pg.Client({
    "user": settings.user,
    "password": settings.password,
    "database": settings.database,
    "hostname": settings.hostname,
    "port": settings.port,
    "ssl": settings.ssl
});

function showList (name) {
    console.log("Searching...");
    client.query(`SELECT * FROM famous_people WHERE first_name = '${name}' OR last_name = '${name}';`, (err, res) => {
        if (err) {
            console.log("You've got an error: ", err)
        } else {
            for (let key in res.rows){
            const person = res.rows[key];
            const date = person.birthdate.toDateString("yyyy/MM/dd");
            console.log(`-${person.id}: ${person.first_name} ${person.last_name}, born ${date}`);
            }
        }
        client.end();
    });
}


client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    showList(process.argv[2]);
  });
