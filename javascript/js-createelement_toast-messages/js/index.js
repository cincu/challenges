console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
let count = 0;

addButton.addEventListener("click", (e) => {
  e.preventDefault();

//   In the bottom right corner you can find a toast messages container with one entry.
  count++;
  console.log(`count: ${count}`);

  const newToast = document.createElement('li');
  newToast.classList.add('toast-container__message');

  toastContainer.append(newToast);
//   When clicking the "Add toast message" button a new entry should
//    be appended to the toast messages container. Create the HTML element for a new toast message with
//     `document.createElement()`. Have a look at the `index.html` to see the required HTML tag and
//      class name.
  
//   When clicking the "Clear all toast messages" button, the list 
//   of toast messages should be emptied. Afterwards you should
//    still be able to add new toast messages and clear them again.
//   // Exercise: Append a new entry to the toast messages container
//
 });

clearButton.addEventListener("click", (e) => {
    e.preventDefault();

    toastContainer.innerHTML = '';
});
