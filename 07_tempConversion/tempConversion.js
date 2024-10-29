function convertToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius and round to 1 decimal place using Math.round
  let celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
}

function convertToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit and round to 1 decimal place using Math.round
  let fahrenheit = (celsius * (9 / 5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
