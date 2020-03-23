const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    tableNumber: { type: Number, },
    seatNumber: { type: Number, },
    orderSubmitted: { type: Boolean, },
    waitTime: { type: Number, },
    orderArray: { type: [String], },
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;