const fs = require("fs"); // Core File system in node js.

// Reading files
fs.readFile("./docs/blog.txt", (error, data) => {
  if (error) {
    console.log(error); // If there is any error, to log it
  }
  console.log(data.toString()); // To return the data for us if there is no error.
  
}); // This function takes 2 arguments, the first is a relative path to the file you want to read, and the second is a callback function to catch any error or to return the data.



// Writing files
fs.writeFile("./docs/blog2.txt", "Hello world, I write to the file now and add it because it was not exist before.", () => {
  console.log("File was written successfully");
}) // This function takes 3 arguments, the first is a relative path to the file you want to write in or create the file if not exist, and the second is the content you want to write note that it will replace every content in the file, and the third is a callback function to run whatt inside the callback.



// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder created"); // Successfull message
  }) // With this `mkdir` function we can create a new directory, This `mkdir` function takes 2 argument, the first one is to add the path and the name of the directory we want to create in this case "assets", and the second is a callback to catch any error
} // Check if the folder is not exist to create it, if exist it will do nothing else it will create it.


// NB: We use `rmdir` to remove a folder

// Deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File deleted successfully");
  }) // Delete the file in the docs folder
} // Check if the file exist