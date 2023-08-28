console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  // const tos = document.querySelector('[data-js="tos-check"]');
  const tos = event.target.elements.tos.checked
  // you should target 
  if (tos === true /*or just tos is also enough */) {
    hideTosError();
  } else {
    showTosError();
  } 
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
