import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
// ### Part 1: Filter

// Have a look at the [`js/index.js`](./js/index.js) file: There is a variable
//  `filteredNews` declared with `news.filter()` and a return value `true`.

// You task is to change the filter method:

// - filter all cards which have the category "politics" in their category array
// - to do so, use the `includes` method on `card.categories`

const filteredNews = news.filter((card) => card.categories.includes('politics'));

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.sort((a, b) => {
if (a.body.length < b.body.length) {
  return -1;
} if (a.body > b.body) {
  return 1;
}
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});


// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
