const convertToCelsius = function(fahrenheit) {

  fahrenheit = Number.parseFloat(fahrenheit);

  if (isNaN(fahrenheit))
    return `ERROR`;

  let celcius = ((fahrenheit - 32) * 5/9);

  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {

  celcius = Number.parseFloat(celcius);

  if (isNaN(celcius))
    return `ERROR`;

  let fahrenheit = (celcius * 9/5) + 32;

  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
