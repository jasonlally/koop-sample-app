module.exports = {
  "server": {
    "port": 1337
  },
  "data_dir": "/usr/local/koop/",
  "db": {
    "conn": process.env.HEROKU_POSTGRESQL_CYAN_URL
  }
}
