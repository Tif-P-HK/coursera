function FibNumbersTool() {
  this.fibList = [];
}

FibNumbersTool.prototype.slowCalculateFibonacci = function (n) {
  if (n === 0 || n === 1)
    return n;

  else return this.slowCalculateFibonacci(n - 1) + this.slowCalculateFibonacci(n - 2);
}

FibNumbersTool.prototype.fastCalculateFibonacci = function (n) {

  if (this.fibList[n - 1]) {
    this.fibList[n] = this.fibList[n - 1] + this.fibList[n - 2];
    return this.fibList[n];
  } else {
    if (n === 0 || n === 1) {
      this.fibList[n] = n;

      return this.fibList[n];
    }

    return this.fastCalculateFibonacci(n - 1) + this.fastCalculateFibonacci(n - 2);
  }
}

FibNumbersTool.prototype.slowCalculateSumOfMods = function (n) {
    if (n === 0 || n === 1) {
      this.fibList[n] = n;
      return fibList[n];
    }

   if (this.fibList[n - 1] >= 0) {
      this.fibList[n] = (this.fibList[n - 1] + this.fibList[n - 2]) % 10;
      return this.fibList[n];
    } 
    
    return (this.slowCalculateSumOfMods(n - 1) + this.slowCalculateSumOfMods(n - 2)) % 10;
}

FibNumbersTool.prototype.fastCalculateSumOfMods = function (n) {
 
 if(n === 0 || n ===1)
  return n;

  var currMod = 0;
  var tempCurrMod = currMod;
  var nextMod = 1;

  for (var i = 1; i < n ; i++) {
    tempCurrMod = nextMod;
    nextMod = (nextMod  + currMod) % 10;
    currMod = tempCurrMod;
  }
  return nextMod;
}

FibNumbersTool.prototype.calculateFibModM = function(n, m){
  // 1 239 ---> 1
  // 239 1000 ---> 161
  // 2816213588 30524 ---> 10249

  this.pi = calculatePisanoLength(m);
  var r = n % this.pi;

  var mod = r;
  var index = 0;
  console.log(index + ": " + mod + ", " + this.pi);
  while(mod > this.pi) {
    console.log(++index + ": " + mod + ", " + this.pi);
    mod = mod % this.pi;
  }

  var fib = this.fastCalculateFibonacci(mod);
  console.log(fib);
  var result = fib % m;
  return result;
}

function calculatePisanoLength(m){
    var a = 0, b = 1, c = a + b;
    for (var i = 0; i < m * m; i++) {
      c = (a + b) % m;
      a = b;
      b = c;
      
      if (a === 0 && b === 1) 
        return i + 1;
    }

    return 0;
}

module.exports = FibNumbersTool;













