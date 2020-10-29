/*const CustomError = require("../extensions/custom-error");*/

module.exports = function countCats(matrix) {
  var result = [].concat(...matrix);
  var n = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "^^") { n++ }

  }
  return n;
};
