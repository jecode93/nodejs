const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", { encoding: 'utf8' }); // This is to Read larger file
const writeStream = fs.createWriteStream("./docs/blog4.txt"); // This is to Create larger file

readStream.on("data", (chunk) => {
  console.log("------ New chunk ------");
  console.log(chunk.toString());
  writeStream.write('\n NEW CHUNK');
  writeStream.write(chunk);
}); // This

// OR this

readStream.pipe(writeStream);