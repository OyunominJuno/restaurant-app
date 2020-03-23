const router = require('express').Router();
let Reservation = require('../models/createReservation');



// app.get('/api/reservation', cors(), (req, res) => {
//     //const dishes =  getDish();
//     //console.log('api.get dishes -',dishes);
//     //res.json(dishes);
//     var query = req.params.query;
//     Reservation
//         .find({'request': query}, function(err, result)
//             {if (err) throw err;
//              // {if (err) return next(err);
//             if (result) {
//                 res.json(result)
//             } else ( res.send(JSON.stringify({error: 'Error'})))})
//         .select({id: 1, guestName: 1, partyNumber: 1, resDate:1, time24hr:1,tableNumber:1,date:1,instructions:1}); //chose which fields you want  weekDay:1,
// })
router.route('/add').post((req, res) => {
    //console.log(JSON.stringify(req));   
    var reservation = new Reservation({
        guestName: req.body.guestName,  
        partyNumber: req.body.partyNumber,
        resDate: req.body.resDate,
        time24hr: req.body.time24hr,
        //weekDay: req.body.weekDay,
        tableNumber: req.body.tableNumber,
        date: req.body.date,
        instructions: req.body.instructions
    }) 
    reservation.save()
        .then(() => res.json('Reservation Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').get((req, res) => {
    Reservation.find()
        .then(reservation => res.json(reservation))
        .catch(err => res.status(400).json('Error: ' + err));
});

// app.delete('api/reservation/:id', (req,res) =>{
//     console.log(req.params.id);  
//     let query = {_id: objectID(req.params.id)};  
//     console.log(query);   
//     Reservation.deleteOne(query, function(err,result){  
//         assert.equal(null, err);   
//         console.log("Item deleted");
//         })  
//         .catch(err => next(err)) 
// })

module.exports = router;
