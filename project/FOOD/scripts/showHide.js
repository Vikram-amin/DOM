function show() {
    let movies_div = document.getElementById("meal_list");
  
    movies_div.style.display = "block";
    movies_div.style.visibility = "visible";
  }
  function hide() {
    let container = document.getElementById("meal_list");
    document.addEventListener("mouseup", function (e) {
      if (!container.contains(e.target)) {
        container.style.display = "none";
        container.style.visibility = "hidden";
        container.innerHTML = "";
        let search = document.getElementById("search");
        search.value = "";
      }
    });
  }
  
  export {show, hide}