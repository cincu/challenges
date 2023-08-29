console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  //   This is the main function that's responsible for rendering the star rating
  // system. It takes an optional parameter filledStars with a default value of 0. 
  // This parameter indicates how many stars should be filled initially.
  starContainer.innerHTML = ''
 // reseting the star container //
for (let i=1; i<=5; i++) {  
  //A for loop is used to iterate over a range of 1 to 5, representing the five stars
  // in the rating system.
const newStars = document.createElement('img')
  if (i <= filledStars) {
    newStars.setAttribute('src', './assets/star-filled.svg');
    //newStars.src = 'assets/star-filled.svg would also work
  } else {
    newStars.setAttribute('src', 'assets/star-empty.svg'); 
  }
  //

 newStars.addEventListener('click', () => {
  //The event listener also calls the renderStars function with the current
  // value of i as an argument. This means that when a star is clicked, the 
  //renderStars function will be called again with an updated number of filled stars,
  // triggering a re-render of the star rating.
  console.log(i)
  renderStars(i);
 });
starContainer.appendChild(newStars);
}
}
renderStars();


//--v-- your code here --v--
//--^-- your code here --^--
// ### Part 2: Change the number of filled stars

// Now we want to render a certain number of filled stars, 
// depending on the argument given to the function:

// - Add a new parameter to the `renderStars` function, named 
// `filledStars`. Expect its value to be a number.
// - Inside the loop, as you create each star, use the value of 
// `filledStars` to decide if a filled or an empty star should be created.
//   💡 Use the counter variable of the for loop to check which star is 
//   currently being created (the first, second, third...)
// - Depending on whether a filled or an empty star should be created, 
// set the `src` of the image element to the filled or empty star image URL.
// - Change the code that calls `renderStars`: pass in a number between 0 and 5
//  as an argument, and see if it works as expected!