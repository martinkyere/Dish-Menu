const img = document.querySelector("#food-img");
const foodName = document.querySelector("#food-name");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const reviews = [
  {
    id: 1,
    name: "fries",
    img: "images/digjot-singh-bR7umfeCS5c-unsplash.jpg",
    text: " French fries, or simply fries, chips, finger chips, hot chips or French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.",
  },
  {
    id: 2,
    name: "Pizza",
    img: "images/nicolas-perondi-UxRhrU8fPHQ-unsplash.jpg",
    text: "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
  },
  {
    id: 3,
    name: "Smoothies",
    img: "images/ikhsan-baihaqi-DlhfsnrX2es-unsplash.jpg",
    text: "A smoothie, or smoothy, is a drink made from pureed raw fruit and/or vegetables, using a blender. A smoothie often has a liquid base such as fruit juice, dairy products, such as milk, yogurt, ice cream or cottage cheese.",
  },
  {
    id: 4,
    name: "Cheese Burger",
    img: "images/ikhsan-baihaqi-dXeBXaThv4U-unsplash.jpg",
    text: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
  },
  {
    id: 5,
    name: "Sandwich",
    img: "images/eaters-collective-Gg5-K-mJwuQ-unsplash.jpg",
    text: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
  },
];

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item

function showPerson(person) {
  const item = reviews[currentItem];
  item.img.classList = "food-image";
  img.src = item.img;
  foodName.textContent = item.name;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
