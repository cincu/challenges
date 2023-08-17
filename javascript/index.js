// Steps
// Create a new JavaScript file in VS Code.
// Initialize a assign values to 2 variables:
// A variable which will hold the value of the meal cost.
// A variable which will hold the value of the tip percentage.
// Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called tipAmount.
// Calculate the total cost of the meal, including tip, by adding the mealCost variable and the tipAmount variable, and store the result in a variable called totalCost.
// Log out a message using the console.log() method that should look like this: // The total cost of your bill is: 33 euros

let mealCost = 25;
const tipPercentage = .1;
const tipAmount = (mealCost * tipPercentage);

console.log('The amount of tip you will be leaving is: ' + tipAmount + '$');

const totalCost = mealCost + tipAmount;

console.log('Your total bill is: ' + totalCost + '$');

