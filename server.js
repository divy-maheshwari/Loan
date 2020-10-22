const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true },() => {
    console.log('connected to DB');
});

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/api',require('./routes/userRoute'))


port = 5000;
app.listen(port,() => {
    console.log(`server running at ${port}`);
});

module.exports = app;