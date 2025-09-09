// to get the arguments (skipping node & script path)
const args = process.argv.slice(2);
// to convert the first argument to integer
const x = parseInt(args[0]);
// to check if it's a number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
