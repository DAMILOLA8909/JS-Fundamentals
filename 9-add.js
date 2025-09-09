// to get the arguments (skipping node & script path)
const args = process.argv.slice(2);
// Function to add two numbers
function add(a, b) {
  return a + b;
}
// to convert the first and second arguments to integers
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);
// Check if both arguments are numbers
console.log(add(num1, num2));
