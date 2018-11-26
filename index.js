function takeANumber(array, name) {
  // Add the customer to the array
  array.push(name);
  // Determine the number for this customer
  let currentNumber = array.length;
  return `Welcome, ${name}. You are number ${currentNumber} in line.`
}

