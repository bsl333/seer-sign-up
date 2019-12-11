const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);

module.exports = app;
