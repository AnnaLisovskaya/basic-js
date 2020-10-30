const CustomError = require("../extensions/custom-error");
let i=1;
let newArr =[];
module.exports = class DepthCalculator {
 calculateDepth(arr) {
    newArr=arr.flat();
    if (JSON.stringify(newArr) === JSON.stringify(arr)){
      return i;
    }   else i=i+1;
    return this.calculateDepth(arr,i);
  }
};