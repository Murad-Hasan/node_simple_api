const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;
const serviceData = require('./service.json');
const productData = require('./product.json');
const userData = require('./user.json');
const commentsData = require('./comments.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/service', (req, res) => {
    res.send(serviceData);
});

app.get('/product', (req, res) => {
    res.send(productData);
});

app.get('/user', (req, res) => {
    res.send(userData);
});

app.get('/comments', (req, res) => {
    res.send(commentsData);
});


app.listen(port, () => {
    console.log('Okay! I am listening on port ' + port);
});