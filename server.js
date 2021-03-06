const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Router files
const classes = require('./routes/classes')

// Environment vars
dotenv.config({path: './config/config.env'});

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/classes' , classes);

const PORT = process.env.PORT ||5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`))