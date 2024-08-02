var ws = new WeakSet();

var obj1 ={}
var obj2 ={}

ws.add(obj1);

console.log(ws.has(obj1))

ws.delete();

console.log(ws.has(obj1))