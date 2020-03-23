const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({  
    name: String, 
    description: String,  
    quantity: Number,
    service: String,
    waitTime: Number
});

const Dish = mongoose.model('Dish', dishSchema);//create the Model

async function createDish(){  
    
    const dish1 = new Dish({  
        name: 'Poached Lobster',   
        description: 'From Nova Scotia, poached in sweet butter',  
        quantity: 22,
        service: 'dinner',
        waitTime: 30
    })  
    var result = await dish1.save();  
    console.log("dish1 - " + result);    
    
    const dish2 = new Dish({
        name: 'Wild Scottish Sea Trout',     
        description: 'Slow cooked with radish and fennel puree',
        quantity: 18,   
        service: 'dinner',
        waitTime: 35
    })   
    result = await dish2.save();  
    console.log("dish2 - " + result);

    const dish3 = new Dish({
        name: 'White Quail',     
        description: 'Quail from Wolfe Ranch with chutney and brussles sprouts',
        quantity: 10,   
        service: 'dinner',
        waitTime: 25
    })   
    result = await dish3.save();  
    console.log("dish3 - " + result);  

    const dish4 = new Dish({
        name: 'Poached Apple Salad',     
        description: 'From K&J Orchards served with Andante Dairy goat cheese',
        quantity: 24,   
        service: 'lunch',
        waitTime: 15
    })   
    result = await dish4.save();  
    console.log("dish4 - " + result);  

    const dish5 = new Dish({
        name: 'Bread and Butter',     
        description: 'Cocoa laminated brioche with Diane St Clair Animal Farm Butter',
        quantity: 20,   
        service: 'lunch',
        waitTime: 15
    })   
    result = await dish5.save();  
    console.log("dish5 - " + result);  

    const dish6 = new Dish({
        name: 'Royal Ossetra Caviar',     
        description: 'Served with Pink Hopper shrimp, pea tendrils, and dill mayo',
        quantity: 6,   
        service: 'lunch',
        waitTime: 20
    })   
    result = await dish6.save();  
    console.log("dish6 - " + result);  
    
    
};
//createDish();
module.exports = Dish;