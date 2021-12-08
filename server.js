const express = require ('express');
const dotenv = require("dotenv");
//const logger = require("./middleware/logger");
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

//load env file
dotenv.config({path: "./config/config.env"});

//connect to DB
connectDB();


//route files
const deliveryPrice = require('./routes/delivery')

const app = express();

//bodyparser
app.use(express.json());

//Dev Logging Middleware
if(process.env.NODE_ENV === 'Development'){
    app.use(morgan('dev'));
}


//Mount Routers
app.use('/api/v1/', deliveryPrice);
app.use(errorHandler);



 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () =>
    console.log(`=====Connection started in ${process.env.NODE_ENV} mode on port ${PORT}=======`)
);

