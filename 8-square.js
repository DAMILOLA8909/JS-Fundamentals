// to get the arguments (skipping node & script path)
const args = process.argv.slice(2);
// to convert the first argument to integer
const size = parseInt(args[0]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
