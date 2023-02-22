require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(connect => console.log("Connected to mongodb."))
.catch(err => console.log("Could not connect to mongodb\n",err)); // Connect to Mongo Database

const responseSchema = {
  guestName: String,
  numOfGuests: Number,
  arrivalDate: String,
  responseDate: Date
};
const Response = mongoose.model("Response", responseSchema);

exports.Response = Response;
