// Update with your config settings.

//EASIEST TO ADD THIS AFTER DEPLOYMENT
localPgConnection = {
  host: "localhost",
  database: "wellness",
  user: "team wombat",
  password: "pass"
};

const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/wellness.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      diirectory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      diirectory: "./data/seeds"
    }
  },
  // Easiest to add this after deployment
  production: {
    client: "pg",
    connection: prodDbConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
