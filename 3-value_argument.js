// Code to get the arguments (ignore first two: node & script path)
const arg = process.argv.slice(2);

// Code to check if the first argument exists
if (arg[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
