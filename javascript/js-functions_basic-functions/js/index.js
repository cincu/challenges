console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = 'The Stranger'
const bookAuthor = 'Albert Camus'
let bookRating = '4/5'
let bookSales = '6 million'
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log('Title: ' + bookTitle);
console.log('Author: ' + bookAuthor);
console.log('Rating: ' + bookRating);
console.log('Sales: ' + bookSales);

let bookRating = '4,5/5'
let bookSales = '7 million'

logBookData();
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/
function logBookData() {
  console.log('Title: ' + bookTitle);
  console.log('Author: ' + bookAuthor);
  console.log('Rating: ' + bookRating);
  console.log('Sales: ' + bookSales);
};

bookRating = '4/5'
bookSales = '6,5 million'

function logBookData() {
  console.log('Title: ' + bookTitle)
  console.log('Author: ' + bookAuthor)
  console.log('Rating: ' + bookRating)
  console.log('Sales: ' + bookSales)
};

logBookData();
bookSales = '7,5 million'

logBookData();
// --v-- write your code here --v--

// --^-- write your code here --^--
