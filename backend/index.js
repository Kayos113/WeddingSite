require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 3000;
const db = require("./rsvpController.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// HOME Route
app.route('/')
.get( (req, res) => {
  res.send('Welcome Home!');
});

app.route('/rsvp')
.get( (req,res) => db.getAllRSVPs(req,res) )
.post( (req,res) => db.writeRSVP(req,res) )

app.route('/rsvp/rand')
.get( (req,res) => db.getRandomRSVP(req,res) )

app.route('rsvp/:id')
.get( (req,res) => db.getRSVPById() )
.delete( (req,res) => db.deleteRSVPById() )

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb
