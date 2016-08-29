var input = document.getElementById('input');
var submit = document.getElementById('submit');
var firstOutput = document.getElementById('first-output')
var secondOutput = document.getElementById('second-output')
var thirdOutput = document.getElementById('third-output')
var testString = input.value;

submit.addEventListener('click', submitFunction);

function submitFunction() {
  if (isNaN(input.value) === true) {
    console.log("letter");
  } else {
    alert("This input only accepts letters!")
    return;
  }
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
}


function reversal() {
var userInput = input.value;
var modifiedInput = userInput.split("").reverse().join("");
firstOutput.innerHTML = modifiedInput;

}

function alphabits() {
var userInput = input.value;
var alphabitInput = userInput.split("").sort().join("");
secondOutput.innerHTML = alphabitInput;
}

function palindrome(og) {
var rev = reversal(og);
if (rev === og) {

    thirdOutput.innerHTML = "This is a palindrome.";
  } else if (rev !== og) {
    thirdOutput.innerHTML = "This is not a palindrome.";
  }
}










