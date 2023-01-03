exports.radioInitState = [{
  name: "attendance",
  value: "unanswered"
},
{
  name:"arrival",
  value:"unanswered"
},
{
  name:"accomodations",
  value:"unanswered"
}];

exports.attendanceOptions = [
  {id: "accept",
  value: "Graciously Attend"},
  {id:"decline",
  value: "Regretfully Decline"}
]

exports.arrivalOptions = [
  {id: "friday",
  value:"Friday the 15th"},
  {id: "saturday",
  value:"Saturday the 16th"},
  {id: "nonattendant",
  value: "Regretfully, I Cannot Attend"}
];

exports.accomodationsOptions = [
  {id:"on-site",
  value:"On Site"},
  {id:"blocked-rooms",
  value:"In Hotels We Found"},
  {id:"own-way",
  value:"I'll Find My Own"}
];
