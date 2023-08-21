console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1 = 24
let pizzaSize2 = 24
let pizzaGain = 0

pizzaInput1.addEventListener("input", (e) => {
  pizzaGain = calculatePizzaGain(e.currentTarget.value, pizzaSize2)
  output.textContent = pizzaGain
});

pizzaInput2.addEventListener("input", (e) => {
  pizzaGain = calculatePizzaGain(pizzaSize1, e.currentTarget.value)
  output.textContent = pizzaGain
});


// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = ((diameter1 / 2) * (diameter1 / 2)) * Math.PI
  const area2 = ((diameter2 / 2) * (diameter2 / 2)) * Math.PI
  const percentage = (area2 - area1) / area1 * 100
  return Math.round(percentage);
}


// define the function calculatePizzaGain here

// Task 2
// ### 2 Change the Pizza Display Sizes

// Great! Now we know how much pizza we gain if we choose the second pizza. But we don't have any visual relations between these two numbers. So lets adapt the pizza displays.

// 1. Write a function `updatePizzaDisplay` which has two parameters: `pizzaElement` - the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
// 2. Calculate the new display size of the pizza element
//    > 💡 The formula is: `newSize / 24 * 100`.
// 3. Set the width of the `pizzaElement` to this new value.
//    > 💡 You can use `pizzaElement.style.width` for that.
//    > 💡 The width needs a unit, a simple number is not enough. Don't forget to concat "px" to your calculated number.
// 4. Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.
// // define the function updatePizzaDisplay here

const pizzaElement = document.querySelector('[data-js="pizza-1"]');

function updatePizzaDisplay (pizzaElement, newSize) {}
  newSize = newSize/ 24 * 100
// Task 3
// define the function updateOutputColor here
