/*const CustomError = require("../extensions/custom-error");*/

/*module.exports = function countCats(matrix) {
  var result = [].concat(...matrix);
  var n = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "^^") { n++ }

  }
  return n;
};*/
module.exports = function countCats(matrix) {
  let count = 0;
  const rowLength = matrix.length;//строки
  for (let i = 0; i < rowLength; i += 1) {
    const colLength = matrix[i].length;
    for (let j = 0; j < colLength; j += 1) {
      if (matrix[i][j] === '^^') count += 1;
    }
  } return count;
}
