const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const dishesRouter = require('./routes/getDishesExpress');
const ordersRouter = require('./routes/getOrdersExpress');
const reservationsRouter = require('./routes/getReservationsExpress');
const ingredientsRouter = require('./routes/getIngredientsExpress');
app.use('/dishes', dishesRouter);
app.use('/orders', ordersRouter);
app.use('/reservations', reservationsRouter);
app.use('/ingredients', ingredientsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});