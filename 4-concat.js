// to get the arguments (ignoring node and script path)
const args = process.argv.slice(2);

// log in the format: "<first> is <second>"
console.log(args[0] + " is " + args[1]);
