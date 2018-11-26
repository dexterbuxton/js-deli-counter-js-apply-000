function takeANumber(array, name) {
  // Add the customer to the array
  array.push(name);
  // Determine the number for this customer
  let currentNumber = array.length + 1;
  return `Welcome, ${name}. You are number ${currentNumber} in line.`
}

