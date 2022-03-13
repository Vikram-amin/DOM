import navbar from "../components/navbar.js";

// Navbar HTML
document.querySelector(".navigation").innerHTML = await navbar();

let search_bar = document.querySelector(".right");
search_bar.innerHTML = ` <div class="select">
      <select name="food" id="category" onchange="fetchData()"></select>
    </div>`;

window.fetchData = fetchData;
window.showData = showData;
window.storeData = storeData;

async function updateSelect() {
  //  Updating select options
  let select = document.querySelector("#category");

  let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  let data = await (await fetch(url)).json();

  let categories = data.categories;
  let option = document.createElement("option");
  option.setAttribute("value", ``);
  option.innerHTML = `Select Categories`;

  select.appendChild(option);
  categories.forEach((element) => {
    let option = document.createElement("option");
    option.setAttribute("value", `${element.strCategory}`);
    option.innerHTML = `${element.strCategory}`;
    select.appendChild(option);
  });

  // Storing data to local Storage
  storeData(categories);
}

updateSelect();

async function storeData(data) {
  //   console.log(data);
  // Foreach not working for await in loop hence use for loop
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${element.strCategory}`;
    let meals;
    try {
      meals = await (await fetch(url)).json();
    } catch (error) {
      console.log(error);
    }
    meals = meals.meals;
    localStorage.setItem(`${element.strCategory}`, JSON.stringify(meals));
  }
}

async function fetchData() {
  // Reading data value from user and updating data
  let category = document.querySelector("#category").value;
  //   console.log(category);
  let data;

  if (category == `Beef`) {
    data = localStorage.getItem("Beef");
  } else if (category == `Chicken`) {
    data = localStorage.getItem("Chicken");
  } else if (category == `Dessert`) {
    data = localStorage.getItem("Dessert");
  } else if (category == `Lamb`) {
    data = localStorage.getItem("Lamb");
  } else if (category == `Miscellaneous`) {
    data = localStorage.getItem("Miscellaneous");
  } else if (category == `Pasta`) {
    data = localStorage.getItem("Pasta");
  } else if (category == `Pork`) {
    data = localStorage.getItem("Pork");
  } else if (category == `Seafood`) {
    data = localStorage.getItem("Seafood");
  } else if (category == `Side`) {
    data = localStorage.getItem("Side");
  } else if (category == `Starter`) {
    data = localStorage.getItem("Starter");
  } else if (category == `Vegan`) {
    data = localStorage.getItem("Vegan");
  } else if (category == `Vegetarian`) {
    data = localStorage.getItem("Vegetarian");
  } else if (category == `Breakfast`) {
    data = localStorage.getItem("Breakfast");
  } else if (category == `Goat`) {
    data = localStorage.getItem("Goat");
  } else if (category == "") {
    document.querySelector(".grid").innerHTML = "";
    return;
  }

  data = JSON.parse(data);
  showData(data);
}

function showData(data) {
  // console.log(data);

  //  Forming grid to show data
  let grid = document.querySelector(".grid");

  grid.innerHTML = "";

  data.forEach((element) => {
    let box = document.createElement("div");

    let food_img = document.createElement("img");
    food_img.src = element.strMealThumb;

    let name = document.createElement("p");
    name.innerHTML = element.strMeal;

    box.append(food_img, name);

    grid.append(box);
  });
}