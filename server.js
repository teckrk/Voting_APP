const express = require('express');
const app = express();
// require('dotenv').config();
const db = require('./db');
 

const bodyparser = require('body-parser');
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;


// import the route files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
 
// Use the route files
app.use('/user',  userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => {
    console.log(`The server port is ${PORT}`);
});
