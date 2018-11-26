function takeANumber(lineOfPeople, newCustomer) {
  // Add the customer to the line of people
  lineOfPeople.push(newCustomer);
  // Determine the number for this customer
  let currentNumber = lineOfPeople.length;
  return `Welcome, ${newCustomer}. You are number ${currentNumber} in line.`
}

function nowServing(lineOfPeople){
  
}