const express = require('express')
const router = express.Router()
const models = require('../models')
const response = require('./response')

router.post('/', function (req, res) {
  const player = req.body
  response.create(res, models.Player.create(
    player
  ))
})

router.delete('/:id', function (req, res) {
  response.delete(res, models.Player.destroy({
    where: {
      id: req.params.id
    }
  }))
})

router.get('/:id', function (req, res) {
  response.get(res, models.Player.findById(
    req.params.id
  ))
})

router.put('/:id', function (req, res) {
  const player = req.body
  response.update(res, models.Player.update(player, {
    where: {
      id: req.params.id
    }
  }))
})

module.exports = router
