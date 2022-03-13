import navbar from "../components/navbar.js";

// Navbar HTMl
document.querySelector(".navigation").innerHTML = await navbar();

let search_bar = document.querySelector(".right");
search_bar.innerHTML = "";

let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

const showData = (data) => {
  let container = document.querySelector(".container");

  console.log(data);
  container.innerHTML = "";

  let h1 = document.createElement("h1");
  h1.innerHTML = `Recipe of the Day : ${data[0].strMeal}`;
  let divImg = document.createElement("div");

  let img = document.createElement("img");
  img.src = data[0].strMealThumb;
  divImg.setAttribute("class", "recipe_img");
  divImg.append(img);
  let divText = document.createElement("div");
  let description = document.createElement("p");
  description.innerHTML = data[0].strInstructions;
  divText.appendChild(description);
  let a = document.createElement("a");
  a.href = data[0].strYoutube;
  a.innerHTML = `YouTube Link`;
  a.target = `_blank`;
  container.append(h1, divImg, divText, a);
};

const fetchData = async (url) => {
  try {
    let data = await (await fetch(url)).json();

    showData(data.meals);
  } catch (error) {
    console.log(error);
  }
};

fetchData(url);