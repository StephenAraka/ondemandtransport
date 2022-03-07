const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');

// MIDDLEWARES 
app.use(express.json());
app.use(cors());

// ROUTE IMPORTS
const usersRoute = require('./routes/users');
const ridesRoute = require('./routes/rides');
const busesRoute = require('./routes/buses');

// ROUTE MIDDLEWARES
app.use('/api/users', usersRoute);
app.use('/api/rides', ridesRoute);
app.use('/api/buses', busesRoute);

// CONNECT TO DB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB CONNECTED!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})

app.get('/', (req, res) => {
        res.status(200).send("Simple bus transport API");
});

app.listen(process.env.PORT || 5000);