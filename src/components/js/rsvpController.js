exports.radioLogic = function(prevValue, newValue, name) {
  if(name === "attendance") {
    return [{
      name:prevValue[0].name,
      value:newValue
    },
    {
      name:prevValue[1].name,
      value:prevValue[1].value
    },
    {
      name:prevValue[2].name,
      value:prevValue[2].value
    }]
  }
  else if (name === "arrival") {
    return [{
      name:prevValue[0].name,
      value:prevValue[0].value
    },
    {
      name:prevValue[1].name,
      value:newValue
    },
    {
      name:prevValue[2].name,
      value:prevValue[2].value
    }]
  }
  else if (name === "accomodations") {
    return [{
      name:prevValue[0].name,
      value:prevValue[0].value
    },
    {
      name:prevValue[1].name,
      value:prevValue[1].value
    },
    {
      name:prevValue[2].name,
      value:newValue
    }]
  }
};

exports.textfieldLogic = function(prevValue, newValue, id) {
  let newGuestArr = [];
  prevValue.forEach( (guest, index) => {
    if(guest.id===id) {
      newGuestArr.push({name:newValue, id:prevValue[index].id});
    } else {
      newGuestArr.push({name:prevValue[index].name, id:prevValue[index].id});
    }
  });
  return newGuestArr;
}


exports.numberChange = function(event) {
  const { value } = event.target;
  if(value<0) {
    return 0;
  } else if(value>7) {
    return 7;
  } else {
    return value;
  }
}
