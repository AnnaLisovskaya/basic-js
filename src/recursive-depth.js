/*const CustomError = require("../extensions/custom-error");
let i=1;
let newArr =[];
module.exports = class DepthCalculator {
 calculateDepth(arr) {
    newArr=arr.flat();
    if (JSON.stringify(newArr) === JSON.stringify(arr)){
      return i;
    }   else {i=i+1;}
    return this.calculateDepth(arr,i);
  }
};*/
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};