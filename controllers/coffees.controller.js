const Coffee = require("../models/Coffee.model");

module.exports.coffeesController = {
  getCoffee: (req, res) => {
    Coffee.find({}).then((data) => {
      res.json(data);
    });
  },

  getCoffeInstock: (req, res) => {
    Coffee.find({ inStock: true }).then((cofe) => {
      res.json(cofe);
    });
  },

  getCoffeId: (req, res) => {
    Coffee.findById(req.params.id).then((cofe) => {
      res.json(cofe);
    });
  },

  postCoffee: (req, res) => {
    Coffee.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      coffeine: req.body.coffeine,
      size: req.body.size,
      description: req.body.description,
    }).then(() => {
      res.json("Добавлен");
    });
  },

  deleteCoffeeId: (req, res) => {
    Coffee.findByIdAndRemove(req.params.id).then(() => {
      res.json("напиток удален");
    });
  },

  patchCoffeeId: (req, res) => {
    Coffee.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      coffeine: req.body.coffeine,
      size: req.body.size,
      description: req.body.description,
    }).then(() => {
      res.json("напиток изменен");
    });
  },
};
