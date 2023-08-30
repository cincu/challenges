import { getRandomColor } from "./utils/randomColor";

console.clear();


const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  getRandomColor;
  circle.style.backgroundColor = "#ccc";
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  getRandomColor;
  square.style.backgroundColor = "#ccc";
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circle, square, pentagon);
