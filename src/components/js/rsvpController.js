const radioLogic = function(prevValue, newValue, name) {
  let newRadioArr = [];
  prevValue.forEach( (response, index) => {
    if(prevValue[index].name === name) { // this is the radio selection that was updated
      newRadioArr.push({name: prevValue[index].name, value: newValue})
    } else { // this is not the response that was updated and should remain the same
      newRadioArr.push({name: prevValue[index].name, value: prevValue[index].value});
    }
  });
  return newRadioArr;
};

const textfieldLogic = function(prevValue, newValue, id) {
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

const numberChange = function(event) {
  const { value } = event.target;
  if(value<0) {
    return 0;
  } else if(value>7) {
    return 7;
  } else {
    return value;
  }
}

const numberLogic = function(guestCount) {
  let guestArr=[];
  for(let i=0; i<guestCount; i++) {
    let identifier = "guest"+i;
    guestArr.push({id: identifier, name:""});
  }
  return guestArr;
}

const getTextfields = function (guestCount, onTextInput) {
  let textfields = [];
  if(guestCount>0){
      for(let i=0; i<guestCount; i++) {
      let identifier="guest"+i;
      textfields.push(<input type="text" id={identifier} key={identifier} className="textfield" name="guestName" placeholder={"Name of Guest "+(i+1)} onChange={onTextInput}/>);
    }
  }
  return textfields;
}

export {radioLogic, textfieldLogic, numberChange, numberLogic, getTextfields}
