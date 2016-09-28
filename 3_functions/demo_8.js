var getNextId = (function () {
  //lastId is available only inside the IIFE
  var lastId = 0;
  return function () {
    return lastId += 1;
  };
}());

console.log(getNextId());
console.log(getNextId());

