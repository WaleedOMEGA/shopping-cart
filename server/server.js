const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const product = require('./models/productModel');
const Router = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use('/', Router);

const connectionString = 'mongodb://localhost/react-shopping-cart';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => console.log('connection complete'));

app.listen(5001, () => {
    console.log('running on port 5001')
});