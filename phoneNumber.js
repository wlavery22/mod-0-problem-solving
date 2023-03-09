var num = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7];

var areaCode = num.slice(0, 3).join('');
var prefix = num.slice(3, 6).join('');
var lineNumber = num.slice(6).join('');
var resultArray = [];
resultArray.push(areaCode, prefix, lineNumber);
var result = resultArray.join('-');

var result = areaCode + '-' + prefix + '-' + lineNumber;

console.log(result);