const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({  
    guestName: String, 
    partyNumber: Number, 
    resDate: String,   
    time24hr: String, 
    weekDay: String,
    tableNumber: Number,    
    date: {type: Date, default: Date.now 
          },
    instructions: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);//create the Model
module.exports = Reservation;