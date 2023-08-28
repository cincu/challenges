console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

// ## Task

// There are two form fields where the user can enter a value.
// As soon as one of these values change, both values shall be
//  multiplied. The result is to be renderes

// ## Hints

// The following hints might guide you:

// - Consider the `input` event for both input fields.
// - How do you set the text content for an HTML element again?

// Switch to the [`js/index.js`](./js/index.js) file and implement
//  the task.

// the input turn into values:
let one = firstInput.value 
let two = secondInput.value
// defining the multiplication function:
function multiply (a,b) {
    result.textContent = a * b
}
// addeventlistener to the firstinput:
firstInput.addEventListener("input", (e) => {
    e.preventDefault()
    one = firstInput.value
    multiply(one, two)
})
// addeventlistener to the secondinput:
secondInput.addEventListener("input", (e) => {
    e.preventDefault()
    two = secondInput.value
    multiply(one, two)
})



