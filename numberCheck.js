const add = function (str) {
  // Find all numbers in the string
  const regex = /-?\d+(\.\d+)?/g;
  const nos = str.match(regex);

  const positiveNumbers = [];
  const negativeNumbers = [];

  // split the numbers into individual digits

  if (nos) {
    nos.forEach((num) => {
      if (parseFloat(num) < 0) {
        negativeNumbers.push(num);
      } else {
        positiveNumbers.push(num);
      }
    });
  }

  // Return an error if negative numbers are present
  if (negativeNumbers.length > 0) {
    return {
      output: negativeNumbers,
      status: 200,
      message: "Negative numbers are not allowed",
    };
  }

  // Return the sum of positive numbers
  var digits = ("" + positiveNumbers).split("");

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseFloat(digits[i]);
  }

  return {
    output: sum,
    status: 200,
    message: null,
  };
};
module.exports = add;
