// to get the arguments (skipping node & script path)
const args = process.argv.slice(2);

// to convert the first argument to integer
const num = parseInt(args[0]);

// to check if it's a number
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
