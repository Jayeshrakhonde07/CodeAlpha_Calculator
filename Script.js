let display = document.querySelector("#Display");
let buttons = document.querySelectorAll(".button");
let string = "";

// Click on button and perform operation
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
        try {
        string = eval(string);
        display.value = string;
      } 
      catch {
        display.value = "Error";
        string = "";
      }
    } 
    else if (value === "AC") {
      string = "";
      display.value = "";
    } 
    else if (value === "C") {
      string = string.slice(0, -1);
      display.value = string;
    } 
    else {
      string += value;
      display.value = string;
    }
  });
});


// Keyboard functionality
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    string += e.key;
    display.value = string;
  }
  if (e.key === "Enter") {
    string = eval(string);
    display.value = string;
  }
  if (e.key === "Delete") {
    string = string.slice(0, -1);
    display.value = string;
  }
});