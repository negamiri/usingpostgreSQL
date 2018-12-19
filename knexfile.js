const settings = require ("./settings");

module.exports = {

  development: {
    client: 'pg',
    connection: {
      "user": settings.user,
      "password": settings.password,
      "database": settings.database,
      "hostname": settings.hostname,
      "port": settings.port,
      "ssl": settings.ssl
    }
  },

  /*
  staging: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  */

};
