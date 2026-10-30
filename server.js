const express = require('express');
const sequelize = require('./database/database');
const app = express();
const port = 5000;


const databaseConnection  = async () => {
    try {
        await sequelize.authenticate();
        console.log('wisdom!!!! Database  dey  connected to db...');
    } catch (error) {
        console.log('unable to connect to the database:', error.message);
    }
}

databaseConnection();




 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});