const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Create a copy of the 'players' array
const team1 = [...players]; // This creates a shallow copy of the array

// Create a copy of the 'person' object
const cap1 = { ...person }; // This creates a shallow copy of the object

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;


