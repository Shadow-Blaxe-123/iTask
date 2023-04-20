const express = require('express')
const app = express();
// const bodyParser = require('body-parser');
const port = 3000;
const connectMongo = require('./db');

connectMongo();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/api/auth', require('./routes/create_user'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})