const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

const sendService = require('./services');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app
  .get('/', (req, res) => {
    res
      .status(400)
      .json({
        errors: [
          { message: 'POST method allowed only' },
        ],
      })
  })
  .post('/', sendService)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
