const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
