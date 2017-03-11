function MaxNumbersFinder(){}

MaxNumbersFinder.prototype.productOfMaxTwo = function(numbers){
  var sortedNumbers = numbers.sort(compare).reverse();

  return sortedNumbers[0]*sortedNumbers[1];
}

function compare(num1, num2){
  return num1 - num2;
}

module.exports = MaxNumbersFinder;