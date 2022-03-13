async function showMeal(title) {
    // console.log(title);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
  
    let data = await fetchData(url);
  
    let container = document.querySelector(".container");
  
    // console.log(data);
    container.innerHTML = "";
  
    let h1 = document.createElement("h1");
    h1.innerHTML = `Your Recipe : ${data[0].strMeal}`;
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
  }
  
  function displayData(data) {
    let movies_div = document.getElementById("meal_list");
  
    movies_div.innerHTML = "";
    // console.log(data);
    if (data == null) {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
  
      let span = document.createElement("span");
  
      span.innerHTML = `No Results Found`;
      card.appendChild(span);
      movies_div.appendChild(card);
    } else {
      data.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let thumbnail = document.createElement("img");
        thumbnail.src = element.strMealThumb;
        thumbnail.alt = `${element.strMeal}`;
  
        let content = document.createElement("div");
        content.setAttribute("class", "content");
  
        let span = document.createElement("span");
  
        span.innerHTML = `${element.strMeal}`;
  
        content.append(span);
  
        card.append(thumbnail, content);
  
        card.addEventListener("click", function () {
          showMeal(element.strMeal);
        });
        movies_div.appendChild(card);
      });
    }
  }
  
  
  export {showMeal, displayData}