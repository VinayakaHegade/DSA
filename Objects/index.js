/* Object - Unordered collection of key : value pairs.
- Key should be of string or symbol data type.
- Value can be of any data type.
- Value can be retrieved using key with dot(.) or bracket[] notation.
- It is not iterable.
 */

const user = {
  name: "Vinayak",
  id: 2,
  "key-three": true,
};

console.log(user);
console.log(user["name"]);
console.log(user.id);

// We cannot retrieve value using . notation when key contains hyphens or spaces, need to use [] notation.
// user.key-three or user."key-three" not possible
console.log(user["key-three"]);

// similarly we can use dot (.) or bracket notation to add/modify key : value pairs.
user.firstName = "John";
user["lastName"] = "Doe";
user.name = "vivian";

// To delete
delete user.id;

console.log(user);
