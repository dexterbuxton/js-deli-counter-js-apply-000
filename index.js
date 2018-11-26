function takeANumber(lineOfPeople, newCustomer) {
  // Add the customer to the line of people
  lineOfPeople.push(newCustomer);
  
  // Determine the number for this customer
  let currentNumber = lineOfPeople.length;
  
  return `Welcome, ${newCustomer}. You are number ${currentNumber} in line.`;
}

function nowServing(lineOfPeople){
  // Determine if there are any people in line
  if (lineOfPeople.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  // Remove the person at the beginning of the lineOfPeople
  let currentCustomer = lineOfPeople.shift()
  return `Currently serving ${currentCustomer}.`
}


function currentLine(lineOfPeople){
  
}