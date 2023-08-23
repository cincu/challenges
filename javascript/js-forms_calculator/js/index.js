console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  let result;
  const addButton = document.getElementById("addition").checked;
  const subButton = document.getElementById("subtraction").checked;
  const mulButton = document.getElementById("multiplication").checked;
  const divButton = document.getElementById("division").checked;

  const numberA = Number(event.target.elements.numberA.value)
  const numberB = Number(event.target.elements.numberB.value)

  if (addButton) {
   result = add(numberA, numberB);
  } else if (subButton) {
    result = subtract(numberA, numberB);
  } else if (mulButton) {
    result = multiply(numberA, numberB);
  } else if (divButton) {
    result = divide(numberA, numberB);
  };
  
  return resultOutput.textContent = result;

});
