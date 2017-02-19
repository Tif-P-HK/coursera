function AddTool(){}

AddTool.prototype.add = function(a, b){
  if(a > 9 || a < 0 || b > 9 || b < 0 )
    return;

  return a + b;
}

module.exports = AddTool;