require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 3000;
const db = require("./controller.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// HOME Route
app.route('/')
.get( (req, res) => {
  res.send('Welcome Home!');
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb