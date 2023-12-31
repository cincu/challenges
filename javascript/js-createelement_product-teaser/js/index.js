console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newArticle = document.createElement('article')
const body = document.querySelector('body')

newArticle.innerHTML +=  
`<article class="product">
  <div class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${name}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
          ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src= ${imageSrc}
            alt=""
          />
        </div>
      </div>
      <footer class="product__footer">
    <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button2 product__buy-button">Buy</button>
      </footer>
      </article>`
      

body.append(newArticle)
const newButton = document.querySelector('.product__buy-button2')
newButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`name: ${name}, price ${price}`)
})

//   This exercise includes an example of a product teaser for an online shop.
//    Please append a second product teaser to the page with JavaScript based on
//     the data given in the `index.js` file.

// Use `.innerHTML` to generate the HTML elements for the teaser. Use string 
// interpolation to include the given data into the HTML.

// Add an event listener to the "buy" button of the second product teaser.
//  When clicking the button, the product's name and price should be logged to the console.

// <article class="product">
//       <div class="product__body">
//         <div class="product__text-container">
//           <h2 class="product__name">Anemonefish</h2>
//           <ul class="product__categories">
//             <li class="product__category">Sea water</li>
//             <li class="product__category">Warmer waters</li>
//             <li class="product__category">Omnivorous</li>
//           </ul>
//           <p class="product__description">
//             Anemonefish are omnivorous and can feed on undigested food from
//             their host anemones. When a sea anemone is not available in an
//             aquarium, the anemonefish may settle in some varieties of soft
//             corals, or large polyp stony corals.
//           </p>
//         </div>
//         <div class="product__image-container">
//           <img
//             class="product__image"
//             src="https://unsplash.com/photos/rEM3cK8F1pk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bmVtb3xlbnwwfHx8fDE2NTk1MjE1MzA&force=true&w=640"
//             alt=""
//           />
//         </div>
//       </div>
//       <footer class="product__footer">
//         <span class="product__price">15,99 €</span>
//         <button type="button" class="product__buy-button">Buy</button>
//       </footer>
//     </article>


// SOME CRAZY WORK :::
//const newArticle = document.createElement('article')
// newArticle.classList.add('product')
// body.append(newArticle)

// const newDiv = document.createElement('div')
// newDiv.classList.add('product__body')
// newArticle.append(newDiv)

// const newDivTwo = document.createElement('div')
// newDivTwo.classList.add('product__text-container')
// newDiv.append(newDivTwo)

// const newHead = document.createElement('h2')
// newHead.classList.add('product__name')
// newHead.innerHTML = name
// newDivTwo.append(newHead)

// const newUnlist = document.createElement('ul')
// newUnlist.classList.add('product__categories')
// newDivTwo.append(newUnlist)

