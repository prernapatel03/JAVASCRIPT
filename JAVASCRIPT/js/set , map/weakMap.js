var wm = new WeakMap();

const obj1 = {}

wm.set(obj1 , "JS");

console.log(wm.get(obj1));

wm.delete(obj1)

console.log(wm.has(obj1))