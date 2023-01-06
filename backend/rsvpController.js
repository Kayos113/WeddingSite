//Controller for "backend" folder
const { RSVP } = require("./rsvpModel.js");
let nElems = 0;

// Route "/rsvp"
exports.getAllRSVPs = function(req, res) {
  RSVP.find({}, (err, foundMessages) => {
      if(!err) {
        res.send(foundMessages);
      } else {
        res.send(err || "Something went wrong retrieving your rsvps.");
      }
  });
}

exports.writeRSVP = function(req, res) {
  const newResponse = new RSVP({
    guestName: req.body.names,
    numOfGuests: req.body.numOfGuests,
    radioAnswers: {}, // req.body.radioAnswers will be set below
    responseDate: Date.now()
  });
  req.body.radioAnswers.forEach( radioAnswer => {
    newResponse.radioAnswers.set(radioAnswer.name, radioAnswer.value);
  });
  newResponse.save((err) => {
    if(!err) {
      console.log("Response submitted.");
      res.send("Response Submitted.");
      nElems++;
    } else {
      console.log(err || "Something went wrong submitting your rsvp. Please try again later.");
      res.send(err);
    }
  });
}

// Route "/rsvp/rand"
exports.getRandomRSVP = function(req, res) {
  getResponseCount();
  const index = Math.floor(Math.random()*nElems);
  RSVP.findOne().skip(index).exec( (err, foundResponse) => {
    res.send(foundResponse);
  });
}

// Route "/rsvp/:id"
exports.getRSVPById = function(req, res) {
  const id = req.params.id;
  RSVP.find({_id:id}, (err, foundResponse) => {
    if(!err) {
      res.send(foundResponse);
    } else {
      res.send(err);
    }
  })
}

exports.deleteRSVPById = function(req, res) {
  RSVP.deleteOne({_id:req.params.id}).then( () => {
    res.send("Deleted Succesfully");
  }).catch("No records deleted with id: " + req.params.id);
}

function getResponseCount() {
  RSVP.countDocuments({}, (err, count) => {
    if(!err) {
      nElems = count;
    } else {
      console.log(err);
    }
  })
}
