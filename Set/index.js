// Set - holds collection of values that are unique
// Can be of mixed data type, Dynamically sized, Iterable
// Does not maintain insertion order.
// Searching and deleting an element faster than array.

// To create a Set constructor is used
const user = new Set(["vinayak", 1, 7]); // accepts array as optional parameter

// To add a element
user.add(4); // adds the new element at the end

// To delete a element
user.delete("vinayak");
user.delete(7);

// To check a particular element exits
console.log(user.has(4));

// To get the size
console.log(user.size);

for (let item of user) console.log(item);

// To delete all the elements
user.clear();

console.log(user);
