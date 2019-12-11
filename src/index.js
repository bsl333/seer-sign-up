require('dotenv').config();
const app = require('./server');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    app.listen(PORT, () => console.info(`listening on port ${PORT}`));
  })
  .catch(e => console.error(e));
