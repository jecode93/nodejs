//Global object in node js
console.log(global);

global.setTimeout(() => {
  console.log("In the time out");
}, 3000);

// Same thing as previous function commented above
setTimeout(() => {
  console.log("In the time out");
  clearInterval(interval)
}, 3000); // Run once after 3 seconds

const interval = setInterval(() => {
  console.log("Inside interval");
}, 1000); // Run every 1 second

console.log(__dirname);
console.log(__filename);