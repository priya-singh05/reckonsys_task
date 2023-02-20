// Function to check if a number is valid for a given number system
function isValidNumber(number, system) {
  const validCharacters = {
    binary: /^[01]+$/,
    octal: /^[0-7]+$/,
    decimal: /^\d+$/,
    hexadecimal: /^[0-9A-Fa-f]+$/
  };
  return validCharacters[system].test(number);
}

// Function to convert a number to decimal
function convertToDecimal(number, from) {
  const base = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
  };
  let decimal = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    const digit = parseInt(number[i], base[from]);
    decimal += digit * Math.pow(base[from], number.length - i - 1);
  }
  return decimal;
}

// Function to convert a decimal number to a number system
function convertFromDecimal(decimal, to) {
  const base = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
  };
  let output = '';
  while (decimal > 0) {
    const digit = decimal % base[to];
    output = digit.toString(base[to]).toUpperCase() + output;
    decimal = Math.floor(decimal / base[to]);
  }
  return output === '' ? '0' : output;
}

// Get the input and output elements
const inputNumber = document.getElementById('input-number');
const inputType = document.getElementById('input-type');
const outputType = document.getElementById('output-type');
const result = document.getElementById('result');

// Get the convert button and add an event listener to it
const convertButton = document.getElementById('convert-button');
convertButton.addEventListener('click', () => {
  // Get the input number and types
  const input = inputNumber.value;
  const from = inputType.value;
  const to = outputType.value;

  // Clear the result element
  result.innerHTML = '';

  // Validate the input number
  if (input === '') {
    result.innerHTML = 'Please enter a number';
    return;
  }
  if (!isValidNumber(input, from)) {
    result.innerHTML = `Invalid ${from} number`;
    return;
  }

  // Convert the input number to decimal
  const decimal = convertToDecimal(input, from);

  // Convert the decimal number to the output number system
  const output = convertFromDecimal(decimal, to);

  // Display the result
  result.innerHTML = output;
});
