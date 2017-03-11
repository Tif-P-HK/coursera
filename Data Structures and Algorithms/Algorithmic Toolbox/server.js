var readline = require("readline");
var process = require('process');
var AddTool = require("./tools/AddTool"); 
var MaxNumbersFinder = require("./tools/MaxNumbersFinder"); 
var FibNumbersTool = require("./tools/FibNumbersTool");  
var GCDTool = require("./tools/GCDTool");

process.stdin.setEncoding("utf8");

var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on("line", assignment2_1);

// current assignment 
function assignment2_1(line){
  if(line === "\n")
    return;

  var inputNums = line.split(' ').map(Number);
  var n = inputNums[0];
  var m = inputNums[1];
  
  // var fibNumbersTools = new FibNumbersTool();
  // var result = fibNumbersTools.calculateFibModM(n, m);

  var gcdTool = new GCDTool();
  var result = gcdTool.calculateLCM(n, m);

  console.log(result);

  process.exit(); 
}









// previous assignment questions

function assignment1_1(line){
  if(line === "\n")
    return;

  var a = parseInt(line.toString().split(" ")[0], 10);
  var b = parseInt(line.toString().split(" ")[1], 10);  
  var addTool = new AddTool();  
  result = addTool.add(a, b);

  console.log(result);
  process.exit();
}

function assignment1_2(line){
  if(line === "\n")
    return;

  var inputCount = parseInt(line, 10);
  if(!inputCount)
    return;

  // read the second line
  rl.on("line", function(line){
  if(line === "\n")
    return;

  var stringArr = line.toString().split(" ");
  numberArr = stringArr.map(function(item){
    return parseInt(item, 10);
  });

  if(numberArr.length != inputCount)
    return;

  var maxNumbersFinder = new MaxNumbersFinder();
  var result = maxNumbersFinder.productOfMaxTwo(numberArr);

  console.log(result);
  
  process.exit();
  });
}