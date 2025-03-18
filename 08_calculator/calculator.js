const add = function(num1, num2) {
	let addition = Number.parseFloat(num1) + Number.parseFloat(num2);

	return (Number.isNaN(addition))? `ERROR`: addition;
};

const subtract = function(num1, num2) {
	let subtraction = Number.parseFloat(num1) - Number.parseFloat(num2);

	return (Number.isNaN(subtraction))? `ERROR`: subtraction;
};

const sum = function(...numbers) {
	// If input is itself an array.
	numbers = numbers.flat();
	
	let summation = numbers.reduce((currentValue, nextValue)=>{
		return Number(currentValue) + Number(nextValue);
		
	}, 0)

	if (Number.isNaN(summation)) 
		return "ERROR";
	else
		return summation;
};

const multiply = function(...numbers) {
	// If input is itself an array.
	numbers = numbers.flat();

	let times = numbers.reduce((currentValue, nextValue) => {
		return Number(currentValue) * Number(nextValue);
	}, 1)

	if (Number.isNaN(times)) 
		return "ERROR";
	else
		return times;
};

const power = function(operand, exponent) {
	operand = +operand;
	exponent = +exponent;

	if (Number.isNaN(operand) || Number.isNaN(exponent))
		return NaN;

	if (operand === 0 && exponent === 0) 
		return `0^0 is ambigous`;

	else if (operand === 0)
		return 0;

	else if (exponent === 0) 
		return 1;

	else if (exponent < 0) {
		exponent = -exponent;

		let result = 1;
		while (exponent >= 1) {
			result *= operand;
			exponent--;
		}
		return 1/result;
	}
	
	else {
		let result = 1;
		while (exponent >= 1) {
			result *= operand;
			exponent--;
		}
		return result;
	}
};

const factorial = function(n) {
	n = Number(n);

	if (Number.isNaN(n))
		return "ERROR";
	else if (n < 0)
		return "Enter a positive number";

	let result = 1;
	while (n > 1) {
		result *= n;
		n--;
	}

	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
