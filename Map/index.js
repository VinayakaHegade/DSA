// Map - Unordered collection of key : value pairs.
// key and value can be of any type, no restrictions as in Object keys.
// Iterable, No prototype as in Object so no default keys.
// No of items can be readily obtained using size, In object it should be manually obtained.
// Can only store data, cannot attach functionality to Map. In Object you can attach functionality to it.

// To create a Map use the constructor
const user = new Map([
  ["a", 1],
  ["b", 2],
]); // optionally accepts an array as argument, array elements length should be 2.

// set method is used add elements
user.set("c", 3);

// To check if a value exists pass the key to has
console.log(user.has("b"));

// delete is used to delete a particular key value pair
user.delete("b");

// To get the no. of key value pairs
console.log(user.size);

console.log(user);

for (const [key, value] of user) console.log(key, value);

// To delete all the key value pairs
user.clear();

console.log(user);
