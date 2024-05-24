console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
Let favoriteNumber = 7;
Let min = 1;
Let max = 50;

Let favoriteNumber = window.prompt("What is my favorite number?");

if (Number < 7) {
  "Too low"
}
else if (Number > 7) {
  "Too high"
}
else (Number == 7) {
  "Congratulations!!!"
}

Let birthMonth = window.prompt("What is your birth Month");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
     console.log ("Winter");
      break;
  case "march":
  case "april":
  case "may":
    console.log ("Spring");
      break;
  case "june":
  case "july":
  case "august":
    console.log ("Summer");
      break;
  case "september":
  case "october":
  case "november":
    console.log ("Fall");
      break;
  default:
    console.log("I'm sorry. Which month???");
  }


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";


switch  (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";


switch (colorId) {
  case "BL":
  color = "Black";
  break;
case "BU":
  color = "Blue";
  break;
case "RD":
  color = "RD";
  break;
case "PU":
  color = "Purple";
  break;
default:
  type = "White";
}


if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (sizeId) {
  case "S":
  size = "Small";
  break;
case "M":
  size = "Medium";
  break;
case "L":
  size = "Large";
  break;
case "XL":
  size = "Extra Large";
  break;
default:
  size = "One Size Fits All";
}

console.log('Product: ${size} ${color} ${type}');