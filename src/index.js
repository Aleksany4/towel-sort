
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length == 0){
    return [];}
    else { for (let i = 1; i < matrix.length; i += 2) {
        let reverse = matrix[i].reverse();
      }
      let arr = matrix.flat();
      return arr;}
}
