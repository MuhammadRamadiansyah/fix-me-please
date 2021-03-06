const Card = require('../models/card')

module.exports = {
  all: function (req, res) {
    Card.find(function(err, cards) {
      if (err) {
        res.status(500).send({
          msg: 'error get data cards',
          err
        })
      } else {
        res.status(200).send({
          msg: 'success get data cards',
          cards
        })
      }
    })
  },
  create: function (req, res) {
    let newCard = new Card(req.body)
    newCard.save(function (err, card) {
      if (err) {
        res.status(500).send({
          msg: 'error add data card',
          err
        })
      } else {
        res.status(201).send({
          msg: 'success add data card',
          card
        })
      }
      res.send(card)
    })
  },
  update: function (req, res) {
    Card.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, function (err, result) {
      if (err) {
        res.status(500).send({
          msg: 'error updating data card',
          err
        })
      } else {
        Card.findOne({ _id: req.params.id }, function (err, card) {
          if (err) {
            res.status(500).send({
              msg: 'error data card not found',
              err
            })
          } else {
            res.status(201).send({
              msg: 'success updating data card',
            })
          }
        })
      }
    })
  },
  deletes: function (req, res) {
    Card.findOneAndRemove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.status(500).send({
          msg: 'error deleting data card',
          err
        })
      } else {
        res.status(201).send({
          msg: 'success deleting data card',
          result
        })
      }
    })
  }
}
