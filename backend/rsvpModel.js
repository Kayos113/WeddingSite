require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(connect => console.log("Connected to mongodb."))
.catch(err => console.log("Could not connect to mongodb\n",err)); // Connect to Mongo Database

const rsvpSchema = {
  numOfGuests: Number,
  names: [],
  radioAnswers: [],
  responseDate: Date
};
const RSVP = mongoose.model("RSVP", rsvpSchema);
exports.RSVP = RSVP;
