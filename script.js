function isDate(input) {
  // Check if the input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime()); // Check if it's a valid date
  }

  // Check if the input is a string and can be parsed into a date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime()); // Check if it's a valid date
  }

  // If the input is not a Date object or a string, return false
  return false;
}

// Do not change the code below.
const input = prompt("Enter Date."); 
alert(isDate(input));
