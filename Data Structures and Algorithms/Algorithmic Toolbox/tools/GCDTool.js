var Big = require("big.js")

function GCDTool(){
}

GCDTool.prototype.calculateGCD = function(a, b){
  if(a === 0)
    return b;

  if(b === 0)
    return a;

  return this.calculateGCD(b, a % b); 
}

GCDTool.prototype.calculateLCM = function(a, b){
  // test case: 1827116622 251772294

  if(a === 0 || b === 0)
    return 0;
  
  var results = Big(a).div(Big(this.calculateGCD(a, b))).times(Big(b));
  var result = results['c'].join('');
  return result;              
}

module.exports = GCDTool;