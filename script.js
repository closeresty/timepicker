// for (let i = 2; i <= 59; i += 2) {
//   let value = (i < 10 ? '0' : '') + i.toString();
//   let label = (i < 10 ? '0' : '') + (i + 1).toString();
//   document.write(`<option value="${value}">${label}</option>`);
// }
// Get a reference to the select element
const select = document.getElementById("minute-select");

// Loop through the options 00 to 59
for (let i = 0; i < 60; i++) {
  // Create a new option element
  const option = document.createElement("option");
  
  // Set the value of the option to the current number
  option.value = i.toString().padStart(2, '0');
  
  // Set the text of the option to the current number
  option.text = i.toString().padStart(2, '0');
  
  // Add the option to the select element
  select.add(option);
}


const selectDropdown = document.getElementById("select-dropdown");

for (let i = 0; i <= 12; i++) {
  const option = document.createElement("option");
  option.text = i.toString().padStart(2, "0"); // Add leading zeros to single-digit numbers
  selectDropdown.add(option);
}
