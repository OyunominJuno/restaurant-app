const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();

var objectID = require('mongodb').ObjectID; 
app.use(express.json()); //return the body as json
app.use(cors());



mongoose.connect('mongodb://localhost/restnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo', err))

const reservationSchema = new mongoose.Schema({
    guestName: String, 
    partyNumber: Number, 
    resDate: Date,   
    time24hr: String, 
   // weekDay: String,
    tableNumber: Number,  
    date: {type: Date, default: Date.now},
    instructions:String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

/*async function getDish(){

    const dishes = await Dish
       .find() //{name: 'Filet Mignon'}
       .select({id: 1,name: 1, description: 1});  //chose which fields you want
    

    console.log('getDish dishes - ',dishes);
    return(dishes);

};*/

const port = 3200;

app.listen(port, () => console.log(`Server started on port ${port}`))


app.get('/api/reservation', cors(), (req, res) => {
    //const dishes =  getDish();
    //console.log('api.get dishes -',dishes);
    //res.json(dishes);
    var query = req.params.query;
    Reservation
        .find({'request': query}, function(err, result)
            {if (err) throw err;
             // {if (err) return next(err);
            if (result) {
                res.json(result)
            } else ( res.send(JSON.stringify({error: 'Error'})))})
        .select({id: 1, guestName: 1, partyNumber: 1, resDate:1, time24hr:1,tableNumber:1,date:1,instructions:1}); //chose which fields you want  weekDay:1,
})
app.post('/api/reservation', cors(), (req,res) =>{  
   console.log(JSON.stringify(req.body)); 
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
    reservation.save(function(err, result){     
        if (err) {return next(err)}    
        res.status(201).json(result)
    });
});
app.delete('api/reservation/:id', (req,res) =>{
    console.log(req.params.id);  
    let query = {_id: objectID(req.params.id)};  
    console.log(query);   
    Reservation.deleteOne(query, function(err,result){  
        assert.equal(null, err);   
        console.log("Item deleted");
        })  
        .catch(err => next(err)) 
})

