// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// console.log(myHeading)
let myVariable = "Bob";
myVariable = 5;

console.log(myVariable !== 5);
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
alert("hello!");
function multiplyOfTwoNumbers(num1, num2) {
  let value = num1 * num2;
  return value;
}
console.log(multiplyOfTwoNumbers(5, 10));
document.querySelector("h4").addEventListener("click", () => {
  alert("ouch! Stop Poking me!");
});

myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  console.log(mySrc);
  if (mySrc === "../images/MODI.png") {
    myImage.setAttribute("src", "../images/ganeshplacement.png");
  } else {
    myImage.setAttribute("src", "../images/MODI.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = ` Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = ` Mozilla is cool, ${storedName}`;
}

// function setUserName() {
//   DataName = prompt(" enter your name");
//   if (!DataName) {
//     setUserName();
//   } else {
//     // localStorage.setItem("name", DataName);
//     myHeading.textContent = `mozilla is cool ,${DataName}`;
//   }
// }
// function setUserName() {
//   let DataName = prompt("Enter your name"); // Prompts the user to enter their name
//   if (!DataName || DataName.trim() === "") {
//     // alert("Name cannot be empty. Please try again.");
//     setUserName(); // If no name is entered, re-prompt the user
//   } else {
//     localStorage.setItem("name", DataName); // Save the name in localStorage
//     myHeading.textContent = `Mozilla is cool, ${DataName}`; // Updates the heading
//   }
// }

// // Check if a name is already stored in localStorage
// if (!localStorage.getItem("name")) {
//   setUserName(); // Prompt the user to set their name if none is stored
// } else {
//   const storedName = localStorage.getItem("name"); // Retrieve the stored name
//   myHeading.textContent = `Mozilla is cool, ${storedName}`; // Update the heading with the stored name
// }

myButton.addEventListener("click", () => {
  setUserName();
});

const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "Dogs are silly."

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "Dogs
//    are
//        silly."
