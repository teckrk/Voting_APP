const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = 'mongodb+srv://doremonkumar07:Walter07@cluster0.4mk9vi0.mongodb.net/'
//const mongoURL = process.env.MONGODB_URL;

// setup mongodbconnection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected to mongoDB server');
});

db.on('error', (err) => {
    console.log('connected to mongoDB server', err);
});

// hello test comment
// 2nd test
module.exports = db;