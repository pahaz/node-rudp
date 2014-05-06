/*
 * This will split a an array-like object into chunks of length `length`.
 */
module.exports.splitArrayLike = function (arr, length) {
  length = length || 1;
  var retval = [];
  for (var i = 0; i < arr.length; i += length) {
    retval.push(arr.slice(i, i + length));
  }
  return retval;
};