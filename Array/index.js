// Array - holds collection of values and elements can be of mixed data types.

const user = [7, "vinayak", true];

// To add elements at end
user.push(99);

// To add element at the beginning
user.unshift(32);

// To remove an element from end
user.pop();

// To remove an element from start
user.shift();

// To print array in console
console.log(user);

/* Time complexity of some of the common array operations
Insert / remove from end  - O(1) i.e, push , pop.
Insert / remove from beginning or in between - O(n) , bcz index of all the elements needs to be shifted. i.e, shift/unshift/concat/slice/splice
Access - O(1)
Search - O(n)
forEach/map/filter/reduce - O(n)
*/
