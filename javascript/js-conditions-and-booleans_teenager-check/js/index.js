const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Beware: input values are *always* strings!
  const age = Number(input.value);

//  Solution 1: 
// if (age <= 19 && age >= 13) {
//     output.textContent = "You are a teen";
//  } else {
//     output.textContent = "You are not a teen";
//  };
(age <= 19 && age >= 13) ? output.textContent = "You are a teen" : output.textContent =  "You are not a teen"

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
