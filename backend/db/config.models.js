//   go this project to db 

import mongoose from "mongoose";

const dbUrl = process.env.DB_URL
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
    