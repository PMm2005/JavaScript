
//! Code 1:
var hello;
//hoist
console.log(hello);
// we have "hellp" declared but not initialized
hello = 'world';
// Assignment after the log so we will have undefined

//! Code 2:

var needle = 'haystack';
//Hoist
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
//


}

