var AddTool = require("./tools/AddTool"); 
var readline = require("readline");

process.stdin.setEncoding("utf8");
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

// Assignment 1.1
rl.on("line", processLine);

function processLine(line){
  if(line === "\n")
    return;
  
  var addTool = new AddTool();
  var a = parseInt(line.toString().split(" ")[0], 10);
  var b = parseInt(line.toString().split(" ")[1], 10);

  if(a > 9 || a < 0 || b > 9 || b < 0 )
    return;
    
  result = addTool.add(a, b);
  
  console.log(result);
  
  process.exit();
}