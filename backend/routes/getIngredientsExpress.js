const router = require('express').Router();
let Ingredient = require('../models/createIngredient');

router.route('/').get((req, res) => {
    Ingredient.find()
        .then(ingredients => res.json(ingredients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    var ingredient = new Ingredient({
        name: req.body.name,  
        quantity: req.body.quantity,
        forDish: req.body.forDish
    })
    ingredient.save()
        .then(() => res.json('Ingredient Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Ingredient.findById(req.params.id)
        .then(ingredient => res.json(ingredient))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ingredient Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Ingredient.findById(req.params.id)
        .then(ingredient => {
            ingredient.name = req.body.name;
            ingredient.quantity = Number(req.body.quantity);
            ingredient.forDish = req.body.forDish;

            ingredient.save()
                .then(() => res.json('Ingredient Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;