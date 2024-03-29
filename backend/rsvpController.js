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
  //extract names from the name objects they were stored as in the react app
  let nameArr = [];
  req.body.names.forEach( nameObject => {
    nameArr.push(nameObject.name);
  });
  console.log(nameArr);
  const newResponse = new RSVP({
    names: nameArr,
    numOfGuests: req.body.numOfGuests,
    radioAnswers: req.body.radioAnswers,
    responseDate: Date.now()
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
