import HashMap from "./hashmap.js";
import HashSet from "./hashset.js";

const testMap = new HashMap();

testMap.set('apple', 'red')
testMap.set('banana', 'yellow')
testMap.set('carrot', 'orange')
testMap.set('dog', 'brown')
testMap.set('elephant', 'gray')
testMap.set('frog', 'green')
testMap.set('grape', 'purple')
testMap.set('hat', 'black')
testMap.set('ice cream', 'white')
testMap.set('jacket', 'blue')
testMap.set('kite', 'pink')
testMap.set('lion', 'golden')
testMap.set('moon', 'white');
testMap.set('box', 'brown');

console.log(testMap.get('kite'));
console.log(testMap.length());
console.log(testMap.has('boy'));
console.log(testMap.keys(), testMap.values(), testMap.entries());
console.log(testMap.clear());
console.log(testMap.keys(), testMap.values(), testMap.entries());

const testSet = new HashSet();

testSet.set('apple')
testSet.set('mango')
testSet.set('banana')
testSet.set('orange')
testSet.set('box')
testSet.set('sun')
testSet.set('moon')
testSet.set('boy')
testSet.set('curtain')
testSet.set('girl')
testSet.set('bike')
testSet.set('couch')
testSet.set('phone')
testSet.set('tv')

console.log(testSet.get('kite'));
console.log(testSet.length());
console.log(testSet.has('boy'));
console.log(testSet.keys());
console.log(testSet.clear());
console.log(testSet.keys());




