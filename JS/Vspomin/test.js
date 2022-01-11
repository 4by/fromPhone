

var o1 = { a: 1 };


var a1 = [ "a", 1 ];
var a2 = [ "b", 2 ];
var m1 = a1.entries();
var s1="djcj";










var myMap = new Map();
myMap.set('0', 'foo');
console.log(Object.fromEntries(myMap));



myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.entries();
console.warn("123");
console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"


