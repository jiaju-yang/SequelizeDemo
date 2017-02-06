module.exports = {
  create: function (res, operation) {
    operation
      .then(function (insertedModel) {
        res.status(201)
          .json({msg: 'Your data has been added.', data: insertedModel})
          .end()
      })
      .catch(function (err) {
        res.status(400)
          .json({msg: 'Bad request.'})
          .end()
      })
  },
  delete: function (res, operation) {
    operation
      .then(function () {
        res.status(200)
          .json({msg: 'Your data has been deleted.'})
          .end()
      })
      .catch(function (err) {
        res.status(400)
          .json({msg: 'Bad request.'})
          .end()
      })
  },
  get: function (res, operation) {
    operation
      .then(function (data) {
        res.status(200)
          .json({data: data})
          .end()
      })
      .catch(function (err) {
        res.status(400)
          .json({msg: 'Bad request.'})
          .end()
      })
  },
  update: function (res, operation) {
    operation
      .then(function (updatedModel) {
        res.status(201)
          .json({msg: 'Your data has been updated.', data: updatedModel})
          .end()
      })
      .catch(function (err) {
        res.status(400)
          .json({msg: 'Bad request.'})
          .end()
      })
  }
}
