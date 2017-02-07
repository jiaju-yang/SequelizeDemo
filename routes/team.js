const express = require('express')
const router = express.Router()
const models = require('../models')
const response = require('./response')

router.post('/', function (req, res) {
  const team = req.body
  response.create(res, models.Team.create(
    team, {
      include: [{
        model: models.Player,
        as: 'players'
      }]
    }))
})

router.delete('/:id', function (req, res) {
  response.delete(res,
    models.sequelize.transaction(function (transaction) {
      return models.Player.destroy(
        {
          where: {
            teamId: req.params.id
          }
        },
        {transaction: transaction})
        .then(function () {
          return models.Team.destroy(
            {
              where: {
                id: req.params.id
              }
            },
            {transaction: transaction})
        })
    })
  )
})

router.get('/:id', function (req, res) {
  response.get(res, models.Team.findById(
    req.params.id,
    {
      attributes: ['id', 'name', 'area', 'establishedAt'],
      include: [{
        model: models.Player,
        as: 'players',
        attributes: ['id', 'age', [models.sequelize.fn('CONCAT', models.sequelize.col('firstName'), ' ', models.sequelize.col('lastName')), 'name']]
      }]
    }
  ))
})

router.put('/:id', function (req, res) {
  const team = req.body
  response.update(res, models.Team.update(team, {
    where: {
      id: req.params.id
    }
  }))
})

module.exports = router
