console.time('for');

var cr= require('./build/Release/object.node').createObject;
var ary = cr("aaa",123,10000000);

console.timeEnd('for');