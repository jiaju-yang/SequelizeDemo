const express = require('express')
const db = require('./models')
const player = require('./routes/player')
const bodyParser = require('body-parser')

db.sequelize.sync({ logging: console.log }).then(function () {
  const app = express()
  app.use(bodyParser.json())
  app.use('/player', player)
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })
})
