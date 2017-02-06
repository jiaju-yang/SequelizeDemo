const express = require('express')
const db = require('./models')
const bodyParser = require('body-parser')
const player = require('./routes/player')
const team = require('./routes/team')

db.sequelize.sync({ logging: console.log }).then(function () {
  const app = express()
  app.use(bodyParser.json())
  app.use('/player', player)
  app.use('/team', team)
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })
})
