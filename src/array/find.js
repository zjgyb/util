const isFunction = require('../type/isFunction');
const isPlainObject = require('../type/isPlainObject');
const isMatch = require('../object/isMatch');

function find(arr, predicate) {
  let _predicate;
  if (isFunction(predicate)) {
    _predicate = predicate;
  }
  if (isPlainObject(predicate)) {
    _predicate = a => isMatch(a, predicate);
  }
  if (_predicate) {
    for (let i = 0; i < arr.length; i += 1) {
      if (_predicate(arr[i])) {
        return arr[i];
      }
    }
  }
  return null;
}

module.exports = find;
