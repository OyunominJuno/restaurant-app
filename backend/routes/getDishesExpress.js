const router = require('express').Router();
let Dish = require('../models/createDish');



// app.get('/api/dish', cors(), (req, res) => {
//     var query = req.params.query;
//     Dish
//     .find({'request': query}, function(err, result)
//         {if (err) throw err;
//         if (result) {
//             res.json(result)
//         } else ( res.send(JSON.stringify({error: 'Error'})))})
//     .select({id: 1, name: 1, description: 1, quantity: 1, service: 1, waitTime: 1});  //chose which fields you want
// });

router.route('/add').post((req, res) => {  
    var dish = new Dish({
        name: req.body.name,  
        description: req.body.description,
        quantity: req.body.quantity,
        service: req.body.service,
        waitTime: req.body.waitTime
    }) 
    dish.save()
        .then(() => res.json('Dish Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Dish.find()
        .then(dishes => res.json(dishes))
        .catch(err => res.status(400).json('Error: ' + err));
});

// app.delete('api/dish/:id', (req,res) =>{
//     console.log(req.params.id);  
//     let query = {_id: objectID(req.params.id)};  
//     console.log(query);   
//     Dish.deleteOne(query, function(err,result){  
//         assert.equal(null, err);   
//         console.log("Item deleted");
//         })  
//         .catch(err => next(err)) 
// });

module.exports = router;