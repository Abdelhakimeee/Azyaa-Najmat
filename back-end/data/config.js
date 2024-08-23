const mongoose = require('mongoose')
require('dotenv').config();



const dbUrl = process.env.DB_URL
    //   # you have to know what this code do + how to 
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


mongoose
    .connect(dbUrl)
    .then(()=>{
        console.info('Connected to the DB');
    })
    .catch((e)=>{
        console.log('Error:',e);
    })
    