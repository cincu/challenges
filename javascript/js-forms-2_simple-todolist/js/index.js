console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
 

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log("data", data);
    
    create();
    form.reset();
    event.target.elements.headline.focus();
});
 
function create (data) {
    const newLi = document.createElement('li')
    const newHead = document.createElement('h2')
    const newText = document.createElement('p')
    newHead.textContent = form.headline.value
    newText.textContent = form.task.value
    // <data.task> works as a name attribute picker from the form element because of lines 9-10
    todoList.append(newLi)
    newLi.append(newHead)
    newLi.append(newText)
};



// ### 2. Create list entries

// Look at the [`index.html`](./index.html) file: there already
//  is an `ul` for our submitted todos. We only need to write a 
//  function which creates list items and appends them to this list.

// Here are some hints to guide you:

// - The function needs one parameter (which will be the form 
//     data object).
// - The list item has
//   - a headline containing the string from `data.headline`
//   - a text element containing the string from `data.task`.
// - Make sure NOT to use `innerHTML` since it is a [security 
//     risk when working with user inputs]
//     (https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
// - Don't forget to
//   - append the headline and text element to the list 
//   item as well as the list item to the todoList
//   - call the function when the submit event is fired 
//   and pass the data object as an argument.

// Switch to the [`js/index.js`](./js/index.js) file and
//  make things happen!