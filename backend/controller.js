const { Response } = require("./model.js");
let nElems = 0;

// Route "/messages"
exports.getAllResponses = function(req, res) {
  Response.find({}, (err, foundMessages) => {
      if(!err) {
        res.send(foundMessages);
      } else {
        res.send(err || "Something went wrong retrieving your messages.");
      }
  });
}

exports.writeMessage = function(req, res) {
  const newResponse = new Response({
    guestName: req.body.guestName,
    numOfGuests: req.body.numOfGuests,
    arrivalDate: req.body.arrivalDate,
    responseDate: Date.now()
  });
  newMessage.save((err) => {
    if(!err) {
      console.log("Response submitted.");
      res.send("Response Submitted.");
      nElems++;
    } else {
      console.log(err || "Something went wrong submitting your response. Please try again later.");
      res.send(err);
    }
  });
}

// Route "/messages/rand"
exports.getRandomResposne = function(req, res) {
  getResponseCount();
  const index = Math.floor(Math.random()*nElems);
  Response.findOne().skip(index).exec( (err, foundResponse) => {
    res.send(foundResponse);
  });
}

// Route "/message/:id"
exports.getMessageById = function(req, res) {
  const id = req.params.id;
  Response.find({_id:id}, (err, foundResponse) => {
    if(!err) {
      res.send(foundResponse);
    } else {
      res.send(err);
    }
  })
}

exports.deleteResponseById = function(req, res) {
  Response.deleteOne({_id:req.params.id}).then( () => {
    res.send("Deleted Succesfully");
  }).catch("No records deleted with id: " + req.params.id);
}

function getResponseCount() {
  Response.countDocuments({}, (err, count) => {
    if(!err) {
      nElems = count;
    } else {
      console.log(err);
    }
  })
}
