const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connected to DB');
    }catch(error){
        console.log(error);
        throw new Error('Error connecting to db');
    }
}

module.exports = {
    dbConnection,
}