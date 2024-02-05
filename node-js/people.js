const people = ["Jean Emmanuel", "Vanessa", "Merly"]
const ages = [31, 31, 2]
console.log(people); // This will log in the terminal if we run the modules file where it is required even if we don't log the people variable because it is already log here, so we automatically have access to it in the module file.

module.exports = { people, ages }; // This is to export and access the people variable in the modules file where we required this file