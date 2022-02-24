module.exports = function check(str, bracketsConfig) {

  let stack = [];
  
  if(str.length % 2 !== 0) {return false};
  
  for(item of str) {
    
    for(subArr of bracketsConfig) {
      
      if(item === subArr[0] && item === subArr[1]) {
       stack[stack.length - 1] === item ? stack.pop() : stack.push(item); 
      }
      
      if(item === subArr[0] && item !== subArr[1]) {
        stack.push(item);
      }
      
      if(item !== subArr[0] && item === subArr[1]) {
        stack[stack.length - 1] === subArr[0] ? stack.pop() : false;
      } 

    }
  }
  return stack.length === 0;
}
