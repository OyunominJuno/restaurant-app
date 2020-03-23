const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restnode', { useNewUrlParser: true, useUnifiedTopology: true })    .then(() => console.log('Connected to Mongo')) 
    .catch(err => console.err('Could not connect to Mongo', err))

const orderSchema = new mongoose.Schema({  
    orderer: String, 
    dish: String,  
    specialInstructions: String,
    allergies: String
});

const Order = mongoose.model('Order', orderSchema);//create the Model

async function createOrder(){  
    
    const order1 = new Order({  
        orderer: 'Andy',   
        dish: 'Poached Lobster',  
        specialInstructions: 'Light butter',
        allergies: 'Gluten'  
    })  
    var result = await order1.save();  
    console.log("order1 - " + result);    
    
    const order2 = new Order({  
        orderer: 'Joanna',   
        dish: 'Wild Scottish Sea Trout',  
        specialInstructions: 'Well done',
        allergies: 'Peanuts'  
    })  
    var result = await order2.save();  
    console.log("order2 - " + result); 
    
    const order3 = new Order({  
        orderer: 'Juno',   
        dish: 'Poached Apple Salad',  
        specialInstructions: 'Light dressing',
        allergies: 'Shellfish'  
    })  
    var result = await order3.save();  
    console.log("order3 - " + result); 
    
};
createOrder();