const express = require('express')
const db = require('./models')

db.sequelize.sync({ logging: console.log }).then(function () {
  const app = express()
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })
})
