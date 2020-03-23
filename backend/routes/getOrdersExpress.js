const router = require('express').Router();
let Order = require('../models/createOrder');

router.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const tableNumber = req.body.tableNumber;
    const seatNumber = req.body.seatNumber;
    const orderSubmitted = req.body.orderSubmitted;
    const waitTime = req.body.waitTime;
    const orderArray = req.body.orderArray;

    const newOrder = new Order({ tableNumber, seatNumber, orderSubmitted, waitTime, orderArray });

    newOrder.save()
        .then(() => res.json('Order Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercie Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            order.tableNumber = Number(req.body.tableNumber);
            order.seatNumber = req.body.seatNumber;
            order.orderSubmitted = req.body.orderSubmitted;
            order.waitTime = req.body.waitTime;
            order.orderArray = req.body.orderArray;

            order.save()
                .then(() => res.json('Exercise Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;